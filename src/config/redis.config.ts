// redis.config.js
import { Redis } from "ioredis";

import config from "./server.config.js";

const { REDIS_HOST, REDIS_PORT } = config;

const redisConfig = {
  port: REDIS_PORT,
  host: REDIS_HOST,
  maxRetriesPerRequest: null,
};

const redis = new Redis(redisConfig);
export default redis;
