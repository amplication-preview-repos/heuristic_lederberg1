import { Appointment } from "../appointment/Appointment";
import { AgentAssignment } from "../agentAssignment/AgentAssignment";

export type Property = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  address: string | null;
  price: number | null;
  propertyType?: "Option1" | null;
  status?: "Option1" | null;
  description: string | null;
  appointments?: Array<Appointment>;
  agentAssignments?: Array<AgentAssignment>;
};
