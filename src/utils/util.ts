/**
 * 获取 随机数
 * @param x
 */
export function getRandom(x: number): number {
  return parseInt(`${Math.random() * x}`);
}
