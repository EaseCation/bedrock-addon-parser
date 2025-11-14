/**
 * behavior/blocks/format/events/run_command.json 的类型定义
 *
 * 此文件由 schema-types-ts 自动生成
 * 请勿手动修改此文件
 *
 * 生成时间: 2025-11-08T05:36:11.018Z
 */

/**
 * Slash command to run.
 */
export type Command = string;

/**
 * Triggers a slash command or a list of slash commands.
 */
export interface RunCommand {
  command?: Command;
  /**
   * The target context to execute against.
   */
  target?: string;
}
