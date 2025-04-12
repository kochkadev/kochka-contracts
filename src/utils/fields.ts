import { Writeable, ZodArray, ZodEnum, ZodTypeAny, z } from "zod";
import {
  EMAIL_NOT_VALID_MESSAGE,
  MIN_ARRAY_LENGTH_MESSAGE,
  MIN_NUMBER_MESSAGE,
  MUST_BE_ARRAY_MESSAGE,
  MUST_BE_BOOLEAN_MESSAGE,
  MUST_BE_ENUM_MESSAGE,
  MUST_BE_INT_MESSAGE,
  MUST_BE_ISO_STRING,
  MUST_BE_NUMBER_MESSAGE,
  MUST_BE_STRING_MESSAGE,
  MUST_BE_UUID_MESSAGE,
  STRING_MUST_BE_NOT_EMPTY_MESSAGE,
  URL_NOT_VALID_MESSAGE,
} from "./messages";

const string = () => z.string({ message: MUST_BE_STRING_MESSAGE });
const stringNotEmpty = () =>
  string().min(1, { message: STRING_MUST_BE_NOT_EMPTY_MESSAGE });
const email = () => stringNotEmpty().email(EMAIL_NOT_VALID_MESSAGE);
const uuid = () => stringNotEmpty().uuid(MUST_BE_UUID_MESSAGE);
const enum_ = <U extends string, T extends Readonly<[U, ...U[]]>>(
  values: T,
): ZodEnum<Writeable<T>> =>
  z.enum(values, { message: MUST_BE_ENUM_MESSAGE(values) });
const number = () => z.coerce.number({ message: MUST_BE_NUMBER_MESSAGE });
const int = () =>
  z.coerce.number({ message: MUST_BE_INT_MESSAGE }).int(MUST_BE_INT_MESSAGE);
const intCoerce = () =>
  z.coerce.number({ message: MUST_BE_INT_MESSAGE }).int(MUST_BE_INT_MESSAGE);
const uint = () =>
  z.coerce
    .number({ message: MUST_BE_INT_MESSAGE })
    .int(MUST_BE_INT_MESSAGE)
    .min(0, MIN_NUMBER_MESSAGE(0));
const array = <T extends ZodTypeAny>(schema: T): ZodArray<T, "many"> =>
  z.array(schema, { message: MUST_BE_ARRAY_MESSAGE });
const arrayNotEmpty = (schema: ZodTypeAny) =>
  field.array(schema).min(1, MIN_ARRAY_LENGTH_MESSAGE(1));
const url = () => stringNotEmpty().url(URL_NOT_VALID_MESSAGE);
const boolean = () => z.coerce.boolean({ message: MUST_BE_BOOLEAN_MESSAGE });
const stringISO = () =>
  z
    .string({ message: MUST_BE_ISO_STRING })
    .pipe(z.coerce.date({ message: MUST_BE_ISO_STRING }));
const dateTimeFromString = () =>
  z
    .string({ message: MUST_BE_ISO_STRING })
    .datetime(MUST_BE_ISO_STRING)
    .transform((value) => new Date(value));
const booleanFromString = () => string().transform((value) => value === "true");
const json = () => string().transform((value) => JSON.stringify(value));
export const field = {
  string,
  stringNotEmpty,
  email,
  uuid,
  enum: enum_,
  number,
  int,
  uint,
  array,
  arrayNotEmpty,
  url,
  boolean,
  stringISO,
  intCoerce,
  dateTimeFromString,
  booleanFromString,
  json,
};
