/**
 * 
 * @param {number} number 目标参数
 * @param {number} precision [precision=0] round的精度
 * @returns {number} 返回保留精度的四舍五入结果
 */
function roundWithFixed(number, precision) {
  precision = precision == null ? 0 : (precision >= 0 ? Math.min(precision, 292) : Math.max(precision, -292))
  if (precision) {
    let pair = `${number}e`.split('e')
    // NOTE: 使用指数符号移位以避免浮点问题。
    // Shift with exponential notation to avoid floating-point issues.
    // See [MDN](https://mdn.io/round#Examples) for more details.
    const value = Math.round(`${pair[0]}e${+pair[1] + precision}`)

    pair = `${value}e`.split('e')
    return (+`${pair[0]}e${+pair[1] - precision}`).toFixed(precision)
  }
  return Math.round(number);
}

export default roundWithFixed;