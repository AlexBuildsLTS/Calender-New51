export interface Event {
  id: number;
  title: string;
  description: string;
  startTime: Date;
  endTime: Date;
  userId: string;
}

export type NewEvent = Omit<Event, 'id'>;