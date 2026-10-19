import app from './app.js'
import { initDb } from './config/db.js'
import logger from './config/logger.js'
import config from 'config'

async function startServer() {
    try {
        await initDb()

        logger.info('database has been connected')

        const PORT: number = Number(config.get('server.port')) || 3000

        app.listen(PORT, () => {
            logger.info('server running at PORT', { port: PORT })
        })
    } catch (err) {
        logger.error('err from server', { err: err })
    }
}

startServer()
