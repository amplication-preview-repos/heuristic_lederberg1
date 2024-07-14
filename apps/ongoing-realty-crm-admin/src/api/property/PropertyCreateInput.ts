import { AppointmentCreateNestedManyWithoutPropertiesInput } from "./AppointmentCreateNestedManyWithoutPropertiesInput";
import { AgentAssignmentCreateNestedManyWithoutPropertiesInput } from "./AgentAssignmentCreateNestedManyWithoutPropertiesInput";

export type PropertyCreateInput = {
  address?: string | null;
  price?: number | null;
  propertyType?: "Option1" | null;
  status?: "Option1" | null;
  description?: string | null;
  appointments?: AppointmentCreateNestedManyWithoutPropertiesInput;
  agentAssignments?: AgentAssignmentCreateNestedManyWithoutPropertiesInput;
};
