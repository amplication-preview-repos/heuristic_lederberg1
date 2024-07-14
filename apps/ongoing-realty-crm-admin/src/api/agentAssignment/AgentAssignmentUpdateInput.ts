import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type AgentAssignmentUpdateInput = {
  agentId?: string | null;
  startDate?: Date | null;
  endDate?: Date | null;
  property?: PropertyWhereUniqueInput | null;
};
