import { AppointmentUpdateManyWithoutPropertiesInput } from "./AppointmentUpdateManyWithoutPropertiesInput";
import { AgentAssignmentUpdateManyWithoutPropertiesInput } from "./AgentAssignmentUpdateManyWithoutPropertiesInput";

export type PropertyUpdateInput = {
  address?: string | null;
  price?: number | null;
  propertyType?: "Option1" | null;
  status?: "Option1" | null;
  description?: string | null;
  appointments?: AppointmentUpdateManyWithoutPropertiesInput;
  agentAssignments?: AgentAssignmentUpdateManyWithoutPropertiesInput;
};
