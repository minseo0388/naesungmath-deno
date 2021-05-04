/**
 * 058 ������ü�� ���� ����
 *  
 * @author: Choi Minseo
 * @param {number} a
 * @return {number} The volume of cube
 * 
 */
exports.cubeVolume = function (a) {
    return (a ** 3)
}

/**
 * 059 ������ü�� �ѳ��� ����
 * 
 * @author: Choi Minseo
 * @param {number} a
 * @return {number} The surface area of cube
 * 
 */
exports.cubeArea = function (a) {
    return (6 * (a ** 2))
}

/**
 * 060 ������ü�� ���� ����
 * 
 * @author: Choi Minseo
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number} The volume of cuboid
 * 
 */
exports.cuboidVolume = function (a, b, c) {
    return (a * b * c)
}

/**
 * 061 ������ü�� �ѳ��� ����
 * 
 * @author: Choi Minseo
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number} The surface area of cuboid
 * 
 */
exports.cuboidArea = function (a, b, c) {
    return (2 * ((a * b) + (b * c) + (c * a)))
}

/**
 * 062 ������ü�� �밢�� ���� ����
 * 
 * @author: Choi Minseo
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number} a plus b
 * 
 */
exports.cuboidDiagonal = function (a, b, c) {
    return (((a ** 2) + (b ** 2) + (c ** 2)) ** 0.5)
}
