import { z } from "zod";
import { ExerciseSchema } from "../../entities";

export const ExerciseResponseSchema = ExerciseSchema;
export type IExerciseResponse = z.infer<typeof ExerciseResponseSchema>;
