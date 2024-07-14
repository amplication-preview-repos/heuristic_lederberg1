import { Property } from "../property/Property";

export type AgentAssignment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  agentId: string | null;
  startDate: Date | null;
  endDate: Date | null;
  property?: Property | null;
};
