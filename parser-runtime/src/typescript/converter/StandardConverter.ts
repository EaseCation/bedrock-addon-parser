/**
 * 标准化转换器基类
 *
 * TODO: Phase 2 - 实现标准化转换逻辑
 */

export class StandardConverter {
  /**
   * 提取浮点数（处理多态类型）
   */
  protected static extractFloat(value: any): number | undefined {
    if (typeof value === 'number') return value;
    if (typeof value === 'object' && value !== null && 'value' in value) {
      return typeof value.value === 'number' ? value.value : undefined;
    }
    return undefined;
  }

  /**
   * 提取整数（处理多态类型）
   */
  protected static extractInt(value: any): number | undefined {
    const float = this.extractFloat(value);
    return float !== undefined ? Math.floor(float) : undefined;
  }

  /**
   * 提取字符串（处理多态类型）
   */
  protected static extractString(value: any): string | undefined {
    if (typeof value === 'string') return value;
    if (typeof value === 'object' && value !== null && 'value' in value) {
      return typeof value.value === 'string' ? value.value : undefined;
    }
    return undefined;
  }

  /**
   * 提取布尔值（处理多态类型）
   */
  protected static extractBoolean(value: any): boolean | undefined {
    if (typeof value === 'boolean') return value;
    if (typeof value === 'object' && value !== null && 'value' in value) {
      return typeof value.value === 'boolean' ? value.value : undefined;
    }
    return undefined;
  }
}
