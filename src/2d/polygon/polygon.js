/**
 * 027 �ٰ����� �밢�� ����
 * 
 * @author: Choi Minseo
 * @param {number} n
 * @return {number} The number of diagonal of polygon
 * 
 */
exports.polydiag = function (n) {
    return (n * (n - 3) / 2)
}

/**
 * 028.1 �ٰ����� ������ ��_60�й�
 * 
 * @author: Choi Minseo
 * @param {number} n
 * @return {number} The sum of the polygons cabinet (degree)
 * 
 */
exports.polyAngleSumDeg = function (n) {
    return (180 * (n - 2))
}

/**
 * 028.2 �ٰ����� ������ ��_ȣ����
 * 
 * @author: Choi Minseo
 * @param {number} n
 * @return {number} The sum of the polygons cabinet (radian)
 * 
 */
exports.polyAngleSumRad = function (n) {
    return ((Math.PI) * (n - 2))
}

/**
 * 029 ���ٰ����� ����
 * 
 * @author: Choi Minseo
 * @param {number} n
 * @param {number} a
 * @return {number} The area of regular polygons
 * 
 */
exports.polyarea = function (n, a) {
    return n * (a ** 2) / (4 * (Math.tan(a / (Math.PI))))
}

/**
 * 030 ���ٰ����� ����
 * 
 * @author: Choi Minseo
 * @param {number} n
 * @return {number} The sum of cabinet of polygon (degree)
 * 
 */
exports.polyAngle_Deg = function (n) {
    return (180 * (n - 2) / n)
}

/**
 * 030.2 ���簢���� ����_ȣ����
 * 
 * @author: Choi Minseo
 * @param {number} n
 * @return {number} The sum of cabinet of polygon (radian)
 * 
 */
exports.polyAngle_Rad = function (n) {
    return ((Math.PI) * (n - 2) / n)
}
