import { z } from "zod";
import { field } from "../../utils";

export const SessionSchema = z.object({
  id: field.string(),
  userId: field.string(),
  trainingId: field.string(),
  startedAt: field.stringISO(),
  finishAt: field.stringISO().nullable(),
});
export type ISession = z.infer<typeof SessionSchema>;
