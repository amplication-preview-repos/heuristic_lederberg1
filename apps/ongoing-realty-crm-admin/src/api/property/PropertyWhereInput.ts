import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";
import { AgentAssignmentListRelationFilter } from "../agentAssignment/AgentAssignmentListRelationFilter";

export type PropertyWhereInput = {
  id?: StringFilter;
  address?: StringNullableFilter;
  price?: FloatNullableFilter;
  propertyType?: "Option1";
  status?: "Option1";
  description?: StringNullableFilter;
  appointments?: AppointmentListRelationFilter;
  agentAssignments?: AgentAssignmentListRelationFilter;
};
