import { z } from "zod";
import { TrainingSchema } from "../../entities";

export const UpdateTrainingRequestSchema = TrainingSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
}).partial();
export type IUpdateTrainingRequest = z.infer<
  typeof UpdateTrainingRequestSchema
>;
