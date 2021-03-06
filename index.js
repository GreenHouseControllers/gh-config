//add modules
const config = require('./functions/insideConfig');
const add = require('./functions/add');
const getFull = require('./functions/getFull');
const get = require('./functions/get');
const deleteE = require('./functions/delete');

//methods
exports.connect = (dirname, path) => {
    config.connect(dirname, path);
}

exports.getFull = () => {
    return getFull();
}

exports.add = (obj) => {
    add(obj);
}

exports.get = (key) => {
    let answer = get(key);
    return answer;
}

exports.delete = (key) => {
    deleteE(key);
}