/**
 * 051 �ﰢ���� ����, �ﰢ���� ���̴� ���� �մ� �� ���
 * 
 * @author: Choi Minseo
 * @param {number} a
 * @param {number} h
 * @return {number} The volume of triangular cone
 * 
 */
exports.triangularPyramidVolume = function (a, h) {
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
exports.squarePyramidVolume_ah = function (a, h) {
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
exports.squarePyramidVolume_ab = function (a, b) {
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
exports.squarePyramidArea_ab = function (a, b) {
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
exports.squarePyramidArea_ah = function (a, h) {
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
exports.squarePyramidHeight = function (a, b) {
    return (((b ** 2) - ((a ** 2) / 2)) ** (0.5))
}
