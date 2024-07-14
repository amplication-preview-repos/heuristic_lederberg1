import { SortOrder } from "../../util/SortOrder";

export type PropertyOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  address?: SortOrder;
  price?: SortOrder;
  propertyType?: SortOrder;
  status?: SortOrder;
  description?: SortOrder;
};
