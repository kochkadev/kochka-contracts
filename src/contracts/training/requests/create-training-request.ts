import { z } from "zod";
import { TrainingSchema } from "../../entities";

export const CreateTrainingRequestSchema = TrainingSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});
export type ICreateTrainingRequest = z.infer<
  typeof CreateTrainingRequestSchema
>;
