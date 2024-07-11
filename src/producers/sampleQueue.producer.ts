import sampleQueue from "../queues/sample.queue";

export default async function sampleQueueProducer(
  name: string,
  payload: Record<string, unknown>
) {
  await sampleQueue.add(name, payload);
}
