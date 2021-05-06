/**
 * 020 ����纯���� ���� ����
 * 
 * @author: Choi Minseo
 * @param {number} a
 * @param {number} h
 * @return {number} The area of parallelogram
 * 
 */
export function parallelogramArea(a : number, h : number) {
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
export function rectangleArea(a : number, b : number) {
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
export function rectangleDiagonal(a : number, b : number) {
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
export function rectanglePerimeter(a : number, b : number) {
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
export function rhombusArea(a : number, b : number) {
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
export function square(a : number) {
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
export function squareArea(a : number, b : number, t : number) {
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
export function trapezoidArea(a : number, b : number, h : number) {
    return (0.5 * (a + b) * h)
}
