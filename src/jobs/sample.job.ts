import { Job } from "bullmq";

import { BullMQJobDefinition } from "../interfaces/bullMQJobDefinition";

export default class SampleJob implements BullMQJobDefinition {
  name: string;
  payload: Record<string, unknown>;

  constructor(payload: Record<string, unknown>) {
    this.name = this.constructor.name;
    this.payload = payload;
  }

  handle = () => {
    console.log("Handler of the JOB is called");
  };

  failed = (job?: Job): void => {
    console.log("Job failed");

    if (job) {
      console.log(job.id);
    }
  };
}
