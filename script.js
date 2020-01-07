const flipbook = require('./node_modules/flipbook/flipbook.min.js');
flipbook({
    id: 'animation',
    path: 'animation/blueFaceActually',
    filename: '%2d',
    extension: 'jpg',
    count: 78,
    speed: 0.5
});