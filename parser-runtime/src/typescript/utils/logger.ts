/**
 * 日志工具
 *
 * 注意：在 GraalVM 沙箱模式下，console 输出会被重定向到 Java 日志系统
 */

export enum LogLevel {
  DEBUG = 'DEBUG',
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR'
}

export class Logger {
  constructor(private readonly name: string) {}

  debug(message: string, ...args: any[]): void {
    this.log(LogLevel.DEBUG, message, ...args);
  }

  info(message: string, ...args: any[]): void {
    this.log(LogLevel.INFO, message, ...args);
  }

  warn(message: string, ...args: any[]): void {
    this.log(LogLevel.WARN, message, ...args);
  }

  error(message: string, ...args: any[]): void {
    this.log(LogLevel.ERROR, message, ...args);
  }

  private log(level: LogLevel, message: string, ...args: any[]): void {
    const timestamp = new Date().toISOString();
    const formatted = `[${timestamp}] [${level}] [${this.name}] ${message}`;

    switch (level) {
      case LogLevel.DEBUG:
      case LogLevel.INFO:
        console.log(formatted, ...args);
        break;
      case LogLevel.WARN:
        console.warn(formatted, ...args);
        break;
      case LogLevel.ERROR:
        console.error(formatted, ...args);
        break;
    }
  }
}

/**
 * 创建 logger 实例
 */
export function createLogger(name: string): Logger {
  return new Logger(name);
}
