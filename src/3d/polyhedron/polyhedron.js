/**
 * 063 ���Ϸ� �ٸ�ü ����
 * 
 * @author: Choi Minseo
 * @param {number} v
 * @param {number} e
 * @param {number} f
 * @return {number} Euler polyhedrob theroem
 * 
 */
exports.eulerPolyhedronTheorem = function (v, e, f) {
    if ((v - e + f) === 2) return true
    if ((v - e + f) !== 2) return false
}
