/**
 * 051 �ﰢ���� ����, �ﰢ���� ���̴� ���� �մ� �� ���
 * 
 * @author: Choi Minseo
 * @param {number} a
 * @param {number} h
 * @return {number} The volume of triangular cone
 * 
 */
export function triangularPyramidVolume(a : number, h : number) {
    return ((1 / 3) * a * h)
}

/**
 * 052A ���簢���� ���� ����
 * 
 * @author: Choi Minseo
 * @param {number} a
 * @param {number} h
 * @return {number}  The volume of square pyramid
 * 
 */
export function squarePyramidVolume_ah(a : number, h : number) {
    return ((1 / 3) * (a ** 2) * h)
}

/**
 * 052B ���簢���� ���� ����
 * 
 * @author: Choi Minseo
 * @param {number} a
 * @param {number} b
 * @return {number} a plus b
 * 
 */
export function squarePyramidVolume_ab(a : number, b : number) {
    return ((1 / 3) * (a ** 2) * (((b ** 2) - ((a ** 2) / 2)) ** (0.5)))
}

/**
 * 053A ���簢���� �ѳ��� ����
 * 
 * @author: Choi Minseo
 * @param {number} a
 * @param {number} b
 * @return {number} The volume of square pyramid
 * 
 */
export function squarePyramidArea_ab(a : number, b : number) {
    return ((a * ((4 * (b ** 2) - (a ** 2)) ** (0.5))) + (a ** 2))
}

/**
 * 053B ���簢���� �ѳ��� ����
 * 
 * @author: Choi Minseo
 * @param {number} a
 * @param {number} b
 * @return {number} The surface area of square pyramid
 * 
 */
export function squarePyramidArea_ah(a : number, h : number) {
    return ((a * ((4 * (h ** 2) - (a ** 2)) ** (0.5))) + (a ** 2))
}

/**
 * 054 ���簢���� ���� ����
 * 
 * @author: Choi Minseo
 * @param {number} a
 * @param {number} b
 * @return {number} The height of square pyramid
 * 
 */
export function squarePyramidHeight(a : number, b : number) {
    return (((b ** 2) - ((a ** 2) / 2)) ** (0.5))
}
