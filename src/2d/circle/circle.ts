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
export function inscribedCircleTriangleArea(a : number, b : number, c : number, r : number) {
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
export function circumscribedCircleTriangleArea_Side(a : number, b : number, c : number, r : number) {
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
export function circumscribedCircleTriangleArea_Angle(a : number, b : number, c : number, r : number) {
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
export function circleArea(r : number) {
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
export function circlePerimeter(r : number) {
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
export function circumference(a : number) {
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
export function circularSectorAngle(r : number, l : number) {
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
export function circularSectorArea_rt(r : number, t : number) {
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
export function circularSectorArea_rl(r : number, l : number) {
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
export function arcLength(r : number, l : number) {
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
export function degreeToRad(deg : number) {
    return deg * Math.PI / 180
}
