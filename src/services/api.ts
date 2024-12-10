import axios from 'axios';
import { Event, NewEvent } from '../types/event';
import { mockEvents } from './mockData';

const api = axios.create({
  baseURL: 'http://localhost:8080/api'
});

const isBackendAvailable = async () => {
  try {
    await api.get('/calendar');
    return true;
  } catch {
    return false;
  }
};

export const calendarApi = {
  getEvents: async () => {
    if (await isBackendAvailable()) {
      const response = await api.get<Event[]>('/calendar');
      return response.data.map(event => ({
        ...event,
        startTime: new Date(event.startTime),
        endTime: new Date(event.endTime)
      }));
    }
    return mockEvents;
  },

  createEvent: async (event: NewEvent) => {
    if (await isBackendAvailable()) {
      const response = await api.post<Event>('/calendar', event);
      return {
        ...response.data,
        startTime: new Date(response.data.startTime),
        endTime: new Date(response.data.endTime)
      };
    }
    const mockEvent: Event = {
      ...event,
      id: Math.floor(Math.random() * 10000)
    };
    mockEvents.push(mockEvent);
    return mockEvent;
  },

  updateEvent: async (event: Event) => {
    if (await isBackendAvailable()) {
      const response = await api.put<Event>(`/calendar/${event.id}`, event);
      return {
        ...response.data,
        startTime: new Date(response.data.startTime),
        endTime: new Date(response.data.endTime)
      };
    }
    const index = mockEvents.findIndex(e => e.id === event.id);
    if (index !== -1) {
      mockEvents[index] = event;
      return event;
    }
    throw new Error('Event not found');
  },

  deleteEvent: async (eventId: number) => {
    if (await isBackendAvailable()) {
      await api.delete(`/calendar/${eventId}`);
    } else {
      const index = mockEvents.findIndex(e => e.id === eventId);
      if (index !== -1) {
        mockEvents.splice(index, 1);
      }
    }
  }
};