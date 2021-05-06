/**
 * 023 ���������� ���� ����
 * 
 * @author: Choi Minseo
 * @param {number} a
 * @return {number} The height of pentagon with side a
 * 
 */
export function pentagonArea(a : number) {
    return ((((a) ** 2) / 4) * ((25 + 10 * ((5) ** 0.5)) ** 0.5))
}

/**
 * 024 ���������� ���� ����
 * 
 * @author: Choi Minseo
 * @param {number} a
 * @return {number} The length of height of pentagon
 * 
 */
export function pentagonHeight(a : number) {
    return (((25 + 10 * ((5) ** 0.5)) / 2) * (a))
}

/**
 * 025 ���������� �밢�� ����
 * 
 * @author: Choi Minseo
 * @param {number} a
 * @return {number} The length of digonal of pentagon
 * 
 */
export function pentagonDiagonal(a : number) {
    // ������ ���ε� ������ ���̶� �ۼ�//
    return ((1 + ((5) ** 0.5) / 2) * (a))
}
