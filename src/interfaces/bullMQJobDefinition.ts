import { Job } from "bullmq";

export interface BullMQJobDefinition {
  name: string;
  payload?: Record<string, unknown>;
  handle: (job?: Job) => void;
  failed: (job?: Job) => void;
}
