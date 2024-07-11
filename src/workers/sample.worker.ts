import { Job, Worker } from "bullmq";

import redis from "../config/redis.config";
import SampleJob from "../jobs/sample.job";

export default function SampleWorker(queueName: string) {
  new Worker(
    queueName,
    async (job: Job) => {
      if (job.name === "SampleJob") {
        const sampleJobInterface = new SampleJob(job.data);

        sampleJobInterface.handle(job);
      }
    },
    { connection: redis }
  );
}
