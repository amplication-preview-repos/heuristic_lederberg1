import { SortOrder } from "../../util/SortOrder";

export type AppointmentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  appointmentDate?: SortOrder;
  notes?: SortOrder;
  clientId?: SortOrder;
  propertyId?: SortOrder;
};
