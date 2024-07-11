import { Queue } from "bullmq";

import redis from "../config/redis.config";

export default new Queue("sampleQueue", { connection: redis });
