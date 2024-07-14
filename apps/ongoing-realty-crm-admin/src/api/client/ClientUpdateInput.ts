import { AppointmentUpdateManyWithoutClientsInput } from "./AppointmentUpdateManyWithoutClientsInput";

export type ClientUpdateInput = {
  name?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  address?: string | null;
  appointments?: AppointmentUpdateManyWithoutClientsInput;
};
