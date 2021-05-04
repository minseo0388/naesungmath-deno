/**
 * 020 ����纯���� ���� ����
 * 
 * @author: Choi Minseo
 * @param {number} a
 * @param {number} h
 * @return {number} The area of parallelogram
 * 
 */
exports.parallelogramArea = function (a, h) {
    return (a * h)
}
/**
 * 016 ���簢���� ���� ����
 * 
 * @author: Choi Minseo
 * @param {number} a
 * @param {number} b
 * @return {number} THe area of rectangle with the side is a, b
 * 
 */
exports.rectangleArea = function (a, b) {
    return (a * b)
}
/**
 * 018 ���簢���� �밢�� ���� ����
 * 
 * @author: Choi Minseo
 * @param {number} a
 * @param {number} b
 * @return {number} Pythagoras Theorem
 * 
 */
exports.rectangleDiagonal = function (a, b) {
    return (((a) ** 2 + (b) ** 2) ** 0.5)
}
/**
 * 017 ���簢���� �ѷ� ����
 * 
 * @author: Choi Minseo
 * @param {number} a
 * @param {number} b
 * @return {number} The circumstance of rectangle with the side is a, b
 * 
 */
exports.rectanglePerimeter = function (a, b) {
    return ((a) * 2 + (b) * 2)
}
/**
 * 019 �������� ���� ����
 * 
 * @author: Choi Minseo
 * @param {number} a
 * @param {number} b
 * @return {number} The area of rhombus with digonal a, b
 * 
 */
exports.rhombusArea = function (a, b) {
    return (0.5 * (a) * (b))
}
/**
 * 015 ���簢���� ���� ����
 * 
 * @author: Choi Minseo
 * @param {number} a
 * @return {number} Area of a square with one side a
 * 
 */
exports.square = function (a) {
    return (a ** 2)
}
/**
 * 022 �簢���� ���� ����
 * 
 * @author: Choi Minseo
 * @param {number} a
 * @param {number} b
 * @param {number} t
 * @return {number} The area of square
 * 
 */
exports.squareArea = function (a, b, t) {
    return (0.5 * (a) * (b) * (Math.sin(t)))
}
/**
 * 021 ��ٸ����� ���� ����
 * 
 * @author: Choi Minseo
 * @param {number} a
 * @param {number} b
 * @param {number} h
 * @return {number} The area of trapezoid
 * 
 */
exports.trapezoidArea = function (a, b, h) {
    return (0.5 * (a + b) * h)
}
