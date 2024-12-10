import { Event } from '../types/event';
import { addDays, addHours, startOfDay } from 'date-fns';

const today = startOfDay(new Date());

export const mockEvents: Event[] = [
  {
    id: 1,
    title: 'Team Meeting',
    description: 'Weekly team sync',
    startTime: addHours(today, 10),
    endTime: addHours(today, 11),
    userId: 'user1'
  },
  {
    id: 2,
    title: 'Project Review',
    description: 'Review Q1 progress',
    startTime: addHours(addDays(today, 1), 14),
    endTime: addHours(addDays(today, 1), 15),
    userId: 'user1'
  },
  {
    id: 3,
    title: 'Client Meeting',
    description: 'Discuss new requirements',
    startTime: addHours(addDays(today, 2), 11),
    endTime: addHours(addDays(today, 2), 12),
    userId: 'user1'
  }
];