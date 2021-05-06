/**
 * 042 Ÿ���� ����
 * 
 * @author: Choi Minseo
 * @param {number} a
 * @param {number} b
 * @return {number} The area of eval
 * 
 */
export function ovalArea(a : number, b : number) {
    return ((Math.PI) * a * b)
}

/**
 * 043 Ÿ���� �̽ɷ�
 * 
 * @author: Choi Minseo
 * @param {number} a
 * @param {number} b
 * @return {number} THe eccentricity of eval
 * 
 */
export function evalEccentricity(a : number, b : number) {
    return ((1 - ((b ** 2) / (a ** 2))) ** 0.5)
}
