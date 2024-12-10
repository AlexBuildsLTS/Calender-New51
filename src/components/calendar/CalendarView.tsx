import React from 'react';
import { Calendar } from 'react-big-calendar';
import { Plus } from 'lucide-react';
import { useEventStore } from '../../store/useEventStore';
import { EventModal } from './EventModal';
import { eventService } from '../../services/eventService';
import { calendarLocalizer } from '../../utils/calendar';
import { Event, NewEvent } from '../../types/event';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './calendar.css';

export const CalendarView: React.FC = () => {
  const { events, setEvents, addEvent, updateEvent, deleteEvent } = useEventStore();
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedEvent, setSelectedEvent] = React.useState<Event | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchEvents = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await eventService.getEvents();
        setEvents(data);
      } catch (err) {
        setError('Failed to fetch events. Using mock data instead.');
        console.error('Failed to fetch events:', err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchEvents();
  }, [setEvents]);

  const handleEventCreate = async (eventData: NewEvent) => {
    try {
      setError(null);
      const newEvent = await eventService.createEvent(eventData);
      addEvent(newEvent);
      setIsModalOpen(false);
    } catch (err) {
      setError('Failed to create event');
      console.error('Failed to create event:', err);
    }
  };

  const handleEventUpdate = async (eventData: NewEvent) => {
    if (!selectedEvent) return;
    
    try {
      setError(null);
      const updatedEvent = await eventService.updateEvent({
        ...eventData,
        id: selectedEvent.id,
      });
      updateEvent(updatedEvent);
      setIsModalOpen(false);
      setSelectedEvent(null);
    } catch (err) {
      setError('Failed to update event');
      console.error('Failed to update event:', err);
    }
  };

  const handleEventDelete = async (eventId: number) => {
    try {
      setError(null);
      await eventService.deleteEvent(eventId);
      deleteEvent(eventId);
    } catch (err) {
      setError('Failed to delete event');
      console.error('Failed to delete event:', err);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <p>Loading calendar...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      <div className="mb-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Meeting Calendar</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-brand-blue text-white rounded-md hover:opacity-90 transition-opacity"
        >
          <Plus size={20} />
          New Event
        </button>
      </div>
      {error && (
        <div className="mb-4 p-4 bg-red-500/10 border border-red-500/20 rounded-md text-red-500">
          {error}
        </div>
      )}
      <div className="h-[calc(100vh-120px)] bg-card rounded-lg shadow-lg p-4">
        <Calendar
          localizer={calendarLocalizer}
          events={events}
          startAccessor="startTime"
          endAccessor="endTime"
          onSelectEvent={(event) => {
            setSelectedEvent(event as Event);
            setIsModalOpen(true);
          }}
          style={{ height: '100%' }}
          className="northmarket-calendar"
        />
      </div>
      <EventModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedEvent(null);
        }}
        onSubmit={selectedEvent ? handleEventUpdate : handleEventCreate}
        onDelete={selectedEvent ? () => handleEventDelete(selectedEvent.id) : undefined}
        initialData={selectedEvent}
      />
    </div>
  );
};