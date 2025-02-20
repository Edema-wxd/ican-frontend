export type Event = {
  event_id: string;
  eventName: string;
  date: string;
  time: string;
  venue: "virtual" | string;
  meetingLink?: string;
  fee: number;
  mcpdCredit: "" | number;
  eventDescription?: string;
  eventImage?: string;
  status: "completed" | "cancelled" | "draft" | "upcoming";
};

export const events: Event[] = [];
