import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type AppointmentWhereInput = {
  id?: StringFilter;
  appointmentDate?: DateTimeNullableFilter;
  notes?: StringNullableFilter;
  client?: ClientWhereUniqueInput;
  property?: PropertyWhereUniqueInput;
};
