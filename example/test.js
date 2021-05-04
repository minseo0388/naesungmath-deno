const nmath = require('../src/math.js')
const assert = require('assert')


console.log(nmath.version)

assert(nmath.calc.plus(1, 1) === 1 + 1)
assert(nmath.calc.minus(1, 1) === 1 - 1)
assert(nmath.calc.multiply(1, 2) === 1 * 2)
assert(nmath.calc.divide(1, 2) === 1 / 2)
assert(nmath.calc.caret(1, 2) === 1 ** 2)
assert(nmath.calc.pow(1, 2) === 1 ** 2)
assert(nmath.calc.sqrt(4) === 4 ** 0.5)

Promise.all([
  nmath.matrix.newtonsmethod((x) => (x * x - 2), 20, 2),
  nmath.matrix.taylor((x) => Math.sin(x), Math.PI / 2, 10)(Math.PI / 2),
  nmath.matrix.matrixmultiply([
      [2, 2],
      [2, 2],
      [2, 2],
      [3, 3],
      [4, 4]
    ], [
      [1, 2, 3, 4, 5],
      [5, 4, 3, 2, 1]
    ]),
  nmath.matrix.LUDecomposition([
      [2, -1, -2],
      [-4, 6,  3],
      [-4, -2, 8]
    ]),
  nmath.matrix.determinant([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ]),
  nmath.matrix.houseHolder([
      [1, -1, 2,  2],
      [-1, 2, 1, -1],
      [2,  1, 3,  2],
      [2, -1, 2,  1]
    ]),
  nmath.matrix.QRDecomposition([
      [0, 1, 1, 1],
      [1, 0, 1, 1],
      [1, 1, 0, 1],
      [1, 1, 1, 0]
    ]),
  nmath.matrix.integral((x) => 3 * x ** 2)(0, 4),
  nmath.matrix.diff((x) => x ** 2)(5),
  nmath.matrix.EigenVectorDecomposition([
      [8, -2],
      [-2, 5]
    ]),
  nmath.matrix.Gauss_Seidel([
      [16, 3,  11],
      [7, -11, 13]
    ]),
  nmath.matrix.Cramer([
    [2,   1, -1,   8],
    [-3, -1,  2, -11],
    [-2,  1,  2,  -3]
  ]),
  nmath.matrix.Durand_Kerner((x) => x ** 5 + 22 * x ** 4 + 49 * x ** 3 - 812 * x ** 2 - 860 * x + 1600, 5, 100),
  nmath.matrix.EigenVectorDecomposition([
      [4, 1],
      [6, 3]
    ], 200),
  nmath.matrix.EigenVectorDecomposition([
      [1, 0, 0],
      [0, 2, 0],
      [0, 0, 3]
    ]),
  nmath.other.ACORN(),
  nmath.matrix.InverseMatrix([
      [2,  0, 1],
      [-2, 3, 4],
      [-5, 5, 6]
    ]),
]).then(console.log)