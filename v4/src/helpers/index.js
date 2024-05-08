require('dotenv').config();

const path = require('path');
// 
const getdir = function (dir) {
    const root = path.resolve(__dirname, '..');
    return path.join(root, dir);
};

const abs_path = function () {
    return path.resolve(__dirname, '..');
}

const view_path = function () {
    return path.resolve(__dirname, '..', 'views');
}

const layout_path = function () {
    return path.resolve(__dirname, '..', 'views', 'layouts');
}

const partials_path = function () {
    return path.resolve(__dirname, '..', 'views', 'partials');
}

//
const env = function (key) {
    return process.env[key] ?? null;
};

module.exports = {
    env, 
    getdir, 
    view_path, 
    layout_path, 
    partials_path,
    abs_path
};