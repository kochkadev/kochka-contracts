export const MUST_BE_STRING_MESSAGE = "Не может быть пустым";
export const MUST_BE_UUID_MESSAGE = "Должно быть формата UUID";
export const EMAIL_NOT_VALID_MESSAGE = "Невалидный email";
export const REQUIRED_FIELD_MESSAGE = "Обязательное поле";
export const STRING_MUST_BE_NOT_EMPTY_MESSAGE = "Не может быть пустым";
export const MUST_BE_NUMBER_MESSAGE = "Поле должно быть числом";
export const MUST_BE_INT_MESSAGE = "Поле должно быть целым числом";
export const MUST_BE_ARRAY_MESSAGE = "Поле должно быть массивом";
export const URL_NOT_VALID_MESSAGE = "Невалидный URL";
export const MUST_BE_BOOLEAN_MESSAGE =
  'Поле должно иметь значение "true" или "false" (boolean)';
export const MUST_BE_ISO_STRING = "Поле должно быть датой в формате ISO String";
export const MUST_BE_ENUM_MESSAGE = (
  values: Readonly<[string, ...string[]]>,
): string => `Должно быть одно из возможных значений [${values.join(", ")}]`;
export const MIN_NUMBER_MESSAGE = (min: number): string =>
  `Число должно быть не меньше ${min}`;
export const MAX_NUMBER_MESSAGE = (max: number): string =>
  `Число должно быть не больше ${max}`;
export const MIN_ARRAY_LENGTH_MESSAGE = (min: number): string =>
  `Количество элементов в массиве должно быть не меньше чем ${min}`;
