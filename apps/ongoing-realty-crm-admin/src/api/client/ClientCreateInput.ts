import { AppointmentCreateNestedManyWithoutClientsInput } from "./AppointmentCreateNestedManyWithoutClientsInput";

export type ClientCreateInput = {
  name?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  address?: string | null;
  appointments?: AppointmentCreateNestedManyWithoutClientsInput;
};
