import { z } from "zod";
import { SessionExerciseSchema } from "../../entities";

export const SessionExerciseResponseSchema = SessionExerciseSchema;
export type ISessionExerciseResponse = z.infer<
  typeof SessionExerciseResponseSchema
>;
