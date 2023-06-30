export interface Id {
  id: number;
}

export interface NewUser {
  email: string;
  name?: string;
  address?: string;
  phone?: string;
  token?: string;
}

export type User = Id & NewUser;

export interface Appointment extends Id {
  dateTime: Date;
  // this should be a trainingId, which would be reasonable if this were
  // a real db. For ease, I'm going to "cheat" and just give the name as
  // a string here.
  trainingName: string;
  //  userId is only present if the appointment is booked
  userId?: number;
}

export type AppointmentDateMap = Record<number, Appointment[]>;

export interface Image {
  fileName: string;
  authorName: string;
  authorLink: string;
  platformName: string;
  platformLink: string;
}

export interface Training extends Id {
  name: string;
  durationInMinutes: number;
  image: Image;
  description: string;
}

export interface Coaches extends Id {
  name: string;
  trainingNames: string[]; // in a more robust app, these might be training IDs
  image: Image;
}
