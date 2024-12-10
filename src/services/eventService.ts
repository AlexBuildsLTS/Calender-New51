import { Event } from '../types/event';
import { calendarApi } from './api';

export const eventService = {
  getEvents: async () => {
    try {
      return await calendarApi.getEvents();
    } catch (error) {
      console.error('Failed to fetch events:', error);
      throw error;
    }
  },

  createEvent: async (event: Omit<Event, 'id'>) => {
    try {
      return await calendarApi.createEvent(event);
    } catch (error) {
      console.error('Failed to create event:', error);
      throw error;
    }
  },

  updateEvent: async (event: Event) => {
    try {
      return await calendarApi.updateEvent(event);
    } catch (error) {
      console.error('Failed to update event:', error);
      throw error;
    }
  },

  deleteEvent: async (eventId: string) => {
    try {
      await calendarApi.deleteEvent(eventId);
    } catch (error) {
      console.error('Failed to delete event:', error);
      throw error;
    }
  }
};