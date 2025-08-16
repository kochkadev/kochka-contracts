import { z } from "zod";
import { SessionSchema, TrainingSchema } from "../../entities";

export const SessionResponseSchema = SessionSchema.omit({
  trainingId: true,
}).extend({
  training: TrainingSchema.pick({ id: true, title: true }),
});
export type ISessionResponse = z.infer<typeof SessionResponseSchema>;
