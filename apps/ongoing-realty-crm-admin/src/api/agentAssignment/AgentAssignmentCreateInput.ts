import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type AgentAssignmentCreateInput = {
  agentId?: string | null;
  startDate?: Date | null;
  endDate?: Date | null;
  property?: PropertyWhereUniqueInput | null;
};
