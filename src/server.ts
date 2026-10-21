import app from './app.js'
import { createMessageBroker } from './common/factories/brokerFactory.js';
import type { MessageBroker } from './common/types/broker.js';
import { initDb } from './config/db.js'
import logger from './config/logger.js'
import config from 'config'

async function startServer() {
  let broker: MessageBroker | null = null;
   const PORT: number = Number(config.get('server.port')) || 3000


    try {
        await initDb()

        logger.info('database has been connected')

        broker = createMessageBroker();
        await broker.connectProducer();

       await broker.connectConsumer();
       await broker.consumeMessage(["product", "topping"], false);

        app.listen(PORT, () => {
            logger.info('server running at PORT', { port: PORT })
        })
    } catch (err) {

      if (broker) {
      await broker.disconnectProducer();
      await broker.disconnectConsumer();
    }      
        logger.error('err from server', { err: err })
    }
}

startServer()
