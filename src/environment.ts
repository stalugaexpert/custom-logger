import { LogLevel } from './index'

export type Environment = 'development' | 'production'

export const APP_ENV: Environment =
  process.env.NODE_ENV === 'production' ? 'production' : 'development'

export const LOG_LEVEL: LogLevel = APP_ENV === 'production' ? 'error' : 'log'
