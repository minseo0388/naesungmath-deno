module.exports = {
    //2d
    circle: require('./2d/circle/circle'),
    oval: require('./2d/oval/oval'),
    triangle: require('./2d/triangle/triangle'),
    rectangle: require('./2d/rectangle/rectangle'),
    polygon: require('./2d/polygon/polygon'),
    pentagon: require('./2d/pentagon/pentagon'),
    hexagon: require('./2d/hexagon/hexagon'),
    //3d
    cone: require('./3d/cone/cone'),
    cube: require('./3d/cube/cube'),
    cylinder: require('./3d/cylinder/cylinder'),
    polyhedron: require('./3d/polyhedron/polyhedron'),
    pyramid: require("./3d/pyramid/pyramid"),
    sphere: require('./3d/sphere/sphere'),
    tetrahedron: require('./3d/tetrahedron/tetrahedron'),
    //others
    angle: require('./angle/angle'),
    calc: require('./calc/calc'),
    calculus: require('./calculus/calculus'),
    equation: require('./equation/equation'),
    matrix: require('./matrix/matrix'),
    others: require('./others/others'),
    progress: require('./progress/progress'),
    vector: require('./vector/vector'),
    //version
    version: require('../package.json').version
}
