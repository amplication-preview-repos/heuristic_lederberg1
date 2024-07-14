import { Client } from "../client/Client";
import { Property } from "../property/Property";

export type Appointment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  appointmentDate: Date | null;
  notes: string | null;
  client?: Client | null;
  property?: Property | null;
};
