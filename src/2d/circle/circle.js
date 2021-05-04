/**
 * 009 �������� �ﰢ���� ���� ����
 * 
 * @author: Choi Minseo
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @param {number} r
 * @return {number} Inscribed circle and triangle area formula
 * 
 */
exports.inscribedCircleTriangleArea = function (a, b, c, r) {
    return (((a + b + c) / 2) * r)
}

/**
 * 010.1 �������� �ﰢ���� ���� ����
 * 
 * @author: Choi Minseo
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @param {number} r
 * @return {number} Inscribed circle and triangle area formula
 * 
 */
exports.circumscribedCircleTriangleArea_Side = function (a, b, c, r) {
    return (a * b * c / 4 / r)
}

/**
 * 010.2 �������� �ﰢ���� ���� ����
 * 
 * @author: Choi Minseo
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @param {number} r
 * @return {number} Inscribed circle and triangle area formula 
 * 
 */
exports.circumscribedCircleTriangleArea_Angle = function (a, b, c, r) {
    return (2 * r * r * (Math.sin(a)) * (Math.sin(b)) * (Math.sin(c)))
}

/**
 * 031 ���� ����
 * 
 * @author: Naesung
 * @param {number} r
 * @return {number} The area of circle
 * 
 */
exports.circleArea = function (r) {
    return ((Math.PI) * (r ** 2))
}

/**
 * 032 ���� �ѷ�
 * 
 * @author: Choi Minseo
 * @param {number} r
 * @return {number} The circumstance of circle
 * 
 */
exports.circlePerimeter = function (r) {
    return (2 * (Math.PI) * r)
}

/**
 * 034 ���ְ��� �߽ɰ�
 * 
 * @author: Choi Minseo
 * @param {number} a
 * @return {number} The center angle of circumferential angle
 * 
 */
exports.circumference = function (a) {
    return (2 * a)
}

/**
 * 039 ��ä���� �߽ɰ� ǥ��_rad
 * 
 * @author: Choi Minseo
 * @param {number} r
 * @param {number} l
 * @return {number} The center angle of sector form (radian)
 * 
 */
exports.circularSectorAngle = function (r, l) {
    return (l / r)
}

/**
 * 040.2 ��ä���� ����_rt_no
 * 
 * @author: Choi Minseo
 * @param {number} r
 * @param {number} t
 * @return {number} THe area of sector form
 * 
 */
exports.circularSectorArea_rt = function (r, t) {
    return (0.5 * r * (t ** 2))
}

/**
 * 040 ��ä���� ����_rl
 * 
 * @author: Choi Minseo
 * @param {number} r
 * @param {number} l
 * @return {number} The area of sector form
 * 
 */
exports.circularSectorArea_rl = function (r, l) {
    return (0.5 * r * l)
}

/**
 * 041 ȣ�� ���� ����
 * 
 * @author: Naesung
 * @param {number} r
 * @param {number} l
 * @return {number} The length of arc
 * 
 */
exports.arcLength = function (r, l) {
    return (r * l)
}

/**
 * 210 60����-���� ��ȯ
 * 
 * @author: Choi Minseo
 * @param {number} deg
 * @return {number} Convert degree to radian
 * 
 */
exports.degreeToRad = function (deg) {
    return deg * Math.PI / 180
}
