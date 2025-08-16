import { z } from "zod";
import { field } from "../../utils";

export const SessionSchema = z.object({
  id: field.uuid(),
  userId: field.uuid(),
  trainingId: field.uuid(),
  startedAt: field.stringISO(),
  finishAt: field.stringISO(),
});
export type ISession = z.infer<typeof SessionSchema>;
