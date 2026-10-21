import config from "config";
import  { KafkaBroker } from "../../config/kafka.js";
import type { MessageBroker } from "../types/broker.js";

let broker: MessageBroker | null = null;

export const createMessageBroker = (): MessageBroker => {
  console.log("connecting to kafka broker...");

  console.log('broker', config.get('kafka.broker'))
  // singleton
  if (!broker) {
    broker = new KafkaBroker("order-service", [config.get("kafka.broker")]);
  }
  return broker;
};