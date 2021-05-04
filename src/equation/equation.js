/**
 * 064A ���� ����
 * 
 * @author: Choi Minseo
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number} Root formula
 * 
 */
exports.rootFormula_plus = function (a, b, c) {
    return ((-b + (((b ** 2) - (4 * a * c)) ** 0.5)) / (2 * a))
}

/**
 * 064B ���� ����
 * 
 * @author: Choi Minseo
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number} Root formula
 * 
 */
exports.rootFormula_minus = function (a, b, c) {
    return ((-b - (((b ** 2) - (4 * a * c)) ** 0.5)) / (2 * a))
}

/**
 * 065A ¦�� ���� ����
 * 
 * @author: Choi Minseo
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number} Root formula(even root)
 * 
 */
exports.rootFormula_EvenPlus = function (a, b, c) {
    return ((-(0.5 * b) + ((((0.5 * b) ** 2) - (a * c)) ** 0.5)) / a)
}

/**
 * 065B ¦�� ���� ����
 * 
 * @author: Choi Minseo
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number} Root formula(even root)
 * 
 */
exports.rootFormula_EvenMinus = function (a, b, c) {
    return ((-(0.5 * b) - ((((0.5 * b) ** 2) - (a * c)) ** 0.5)) / a)
}

/**
 * 066 �ٰ� ������� ���� ����
 * 
 * @author: Choi Minseo
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @param {number} type
 * @return {number} Relation of root and coefficient
 * 
 */
exports.rootAndCoefficient = function (a, b, c, type) {
    if (type === 1) return -(b / a)
    if (type === 2) return (b / c)
}

/**
 * 067A ������������ �ٰ� ������� ���� ����
 *  
 * @author: Choi Minseo
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @param {number} d
 * @return {number} Root formula of cubic equation
 * 
 */
exports.cubicEquation_first = function (a, b, c, d) {
    let x = (((0.5 * ((2 * (b ** 3) - (9 * a * b * c) + (27 * (a ** 2) * d) + (((2 * (b ** 3) - (9 * a * b * c) + (27 * (a ** 2) * d)) ** 2) - 4((b ** 2) - 3 * a * c) ** 3) ** 0.5))) ** (1 / 3)))
    let y = (((0.5 * ((2(b ** 3) - (9 * a * b * c) + (27 * (a ** 2) * d) - (((2 * (b ** 3) - (9 * a * b * c) + (27 * (a ** 2) * d)) ** 2) - 4((b ** 2) - 3 * a * c) ** 3) ** 0.5))) ** (1 / 3)))
    return -(b / (3 * a)) - ((1 / (3 * a)) * x) - ((1 / (3 * a)) * y)
}

/**
 * 067B ������������ �ٰ� ������� ���� ����
 *
 * python �������� ����ϼ���.
 */
/*
exports.cubicEquation_second = function (a, b, c, d) {
  let x = (((0.5 * ((2(b ** 3) - (9 * a * b * c) + (27 * (a ** 2) * d) + (((2 * (b ** 3) - (9 * a * b * c) + (27 * (a ** 2) * d)) ** 2) - 4((b ** 2) - 3 * a * c) ** 3) ** 0.5))) ** (1 / 3)))
  let y = (((0.5 * ((2(b ** 3) - (9 * a * b * c) + (27 * (a ** 2) * d) - (((2 * (b ** 3) - (9 * a * b * c) + (27 * (a ** 2) * d)) ** 2) - 4((b ** 2) - 3 * a * c) ** 3) ** 0.5))) ** (1 / 3)))
  return
}
*/

/**
 * 067C ������������ �ٰ� ������� ���� ����
 *
 * python �������� ����ϼ���.
 */
/*
exports.cubicEquation_third = function (a, b, c, d) {
  let x = (((0.5 * ((2 * (b ** 3) - (9 * a * b * c) + (27 * (a ** 2) * d) + (((2 * (b ** 3) - (9 * a * b * c) + (27 * (a ** 2) * d)) ** 2) - 4((b ** 2) - 3 * a * c) ** 3) ** 0.5))) ** (1 / 3)))
  let y = (((0.5 * ((2 * (b ** 3) - (9 * a * b * c) + (27 * (a ** 2) * d) - (((2 * (b ** 3) - (9 * a * b * c) + (27 * (a ** 2) * d)) ** 2) - 4((b ** 2) - 3 * a * c) ** 3) ** 0.5))) ** (1 / 3)))
  return
}
*/
