import { LOG_LEVEL } from './environment'

export type LogFn = (message?: any, ...optionalParams: any[]) => void

export interface Logger {
  log: LogFn
  warn: LogFn
  error: LogFn
}

export type LogLevel = 'log' | 'warn' | 'error'

const NO_OP: LogFn = (_message?: any, ..._optionalParams: any[]) => {}

export class ConsoleLogger implements Logger {
  readonly log: LogFn
  readonly warn: LogFn
  readonly error: LogFn

  constructor(options?: { level?: LogLevel }) {
    const { level } = options || {}

    this.error = console.error.bind(console)

    if (level === 'error') {
      this.warn = NO_OP
      this.log = NO_OP

      return
    }

    this.warn = console.warn.bind(console)

    if (level === 'warn') {
      this.log = NO_OP

      return
    }

    this.log = console.warn.bind(console)
  }
}

export const logger = new ConsoleLogger({ level: LOG_LEVEL })
