import { z } from "zod";
import {
  SessionExerciseSchema,
  SessionSchema,
  TrainingSchema,
} from "../../entities";
import { field } from "../../../utils";

export const SessionResponseSchema = SessionSchema.omit({
  trainingId: true,
}).extend({
  training: TrainingSchema.pick({ id: true, title: true }),
  exercises: field.array(
    SessionExerciseSchema.omit({
      sessionId: true,
      trainingExerciseId: true,
      createdAt: true,
      updatedAt: true,
    }),
  ),
});
export type ISessionResponse = z.infer<typeof SessionResponseSchema>;
