/**
 * Plus two number. (000A)
 * 
 * @author: Choi Minseo
 * @param {number} a
 * @param {number} b
 * @return {number} a + b
 * 
 */
export function plus(a : number, b : number) {
    return a + b
}
/**
 * 000K ����
 * 
 * @author: Choi Minseo
 * @return {number} pi
 * 
 */
export const pi = Math.PI

export function round(a) {
    return Math.round(a)
}
/**
 * 000F ��ǥ
 * 
 * @author: Choi Minseo
 * @param {number} a
 * @param {number} b
 * @return {number} (a, b)
 * 
 */
export function pow(a : number, b : number) {
    return Math.pow(a, b)
}
/**
 * 000E a�� b����
 * 
 * @author: Choi Minseo
 * @param {number} a
 * @param {number} b
 * @return {number} a ^ b
 * 
 */
export function caret(a : number, b : number) {
    return a ** b
}
/**
 * 000D ������
 * 
 * @author: Choi Minseo
 * @param {number} a
 * @param {number} b
 * @return {number} a / b
 * 
 */
export function divide(a : number, b : number) {
    return a / b
}
/**
 * 902 gcd
 *
 * @author: DPS0340, Choi Minseo
 * @param {number} a
 * @param {number} b
 * @return {number} gcd
 * 
*/
export function gcd(a : number, b : number) {
    if (b === 0) {
        return a
    } else {
        return gcd(b, a % b)
    }
}
/**
 * 901 IsInRange
 *
 * @author: DPS0340
 * @param {string} a, b
 * @return {number} IsInRange
 * 
 */
export function isinrange(a : number, b : number) {
    let g = function (x) {
        if (a <= x && x <= b) {
            return true
        } else {
            return false
        }
    }
    return g
}
/**
 * 000B ����
 * 
 * @author: Choi Minseo
 * @param {number} a
 * @param {number} b
 * @return {number} a - b
 * 
 */
export function minus(a : number, b : number) {
    return a - b
}
/**
 * 000C ���ϱ�
 * 
 * @author: Choi Minseo
 * @param {number} a
 * @param {number} b
 * @return {number} a * b
 * 
 */
export function multiply(a : number, b : number) {
    return a * b
}
/**
 * 007 �ﰢ���� ����
 * 
 * @author: Choi Minseo
 * @param {number} a
 * @param {number} h
 * @return {number} Area of triangle given base and height
 * 
 */
export function triangleAreaSide(a : number, h : number) {
    return (0.5 * a * h)
}
/**
 * 000J ȣ����
 * 
 * @author: Choi Minseo
 * @param {number} a
 * @return {number} change a to radian
 * 
 */
export function radian(a : number) {
    return 2 * Math.PI * a
}
/**
 * 000H ����
 * 
 * @author: Choi Minseo
 * @param {number} a
 * @param {number} b
 * @return {number} random number from a to b
 * 
 */
export function random(a : number, b : number) {
    const ranNum = Math.floor((Math.random() * b) + a)
    return ranNum
}
/**
 * 068 ������ �ٻ�
 * 
 * @param {number} val
 * @param {number} digit_
 * @return {number}
 * 
 * 
 */

export function Root(a = 10) { // �Լ��ƴ� ������Ÿ����
    this.get = function (val : number, digit : number = a) {
        return parseFloat((val ** 0.5).toFixed(digit))
    }
}

export const root = new Root()

/**
 * 000G ����
 * 
 * @author: Choi Minseo
 * @param {number} a
 * @return {number} root a
 * 
 */
export function sqrt(a : number) {
    return Math.sqrt(a)
}
