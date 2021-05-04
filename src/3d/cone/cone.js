/**
 * 050 ������ �ѳ���
 * 
 * @author: Naesung
 * @param {number} r
 * @param {number} h
 * @return {number} The surface area of cone
 * 
 */
exports.coneArea = function (r, h) {
    return (((Math.PI) * r * (((r ** 2) + (h ** 2)) ** 0.5)) + ((Math.PI) * (r ** 2)))
}
/**
 * 049 ������ ����
 * 
 * @author: Naesung
 * @param {number} r
 * @param {number} h
 * @return {number} The volume of cone
 * 
 */
exports.coneVolume = function (r, h) {
    return ((1 / 3) * (Math.PI) * (r ** 2) * h)
}
