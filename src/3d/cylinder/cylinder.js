/**
 * 048 ������� �ѳ���
 * 
 * @author: Choi Minseo
 * @param {number} r
 * @param {number} h
 * @return {number} The surface area of cylinder
 * 
 */
exports.cylinderArea = function (r, h) {
    return ((2 * (Math.PI) * r * h) + (2 * (Math.PI) * (r ** 2)))
}
/**
 * 047 ������� ����
 * 
 * @author: Choi Minseo
 * @param {number} r
 * @param {number} h
 * @return {number} The volume of cylinder
 * 
 */
exports.cylinderVolume = function (r, h) {
    return ((Math.PI) * (r ** 2) * h)
}
