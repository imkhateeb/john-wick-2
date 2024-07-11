import express, { Express } from "express";

import serverConfig from "./config/server.config";
import sampleQueueProducer from "./producers/sampleQueue.producer";
import apiRouter from "./routes";
import SampleWorker from "./workers/sample.worker";

const app: Express = express();

app.use("/api", apiRouter);

app.listen(serverConfig.PORT, () => {
  console.log("Server is running on http://localhost:" + serverConfig.PORT);

  // Start workers
  SampleWorker("sampleQueue");

  console.log("Workers are running");

  // Start queues
  sampleQueueProducer("sampleQueue", {
    name: "Khateeb",
    age: 25,
    role: "Software Engineer",
  });
});
