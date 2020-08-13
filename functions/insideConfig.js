// add modules
const pathLib = require('path');
const fs = require('fs');

exports.connect = (dirname, path) => {
    let fullPath = pathLib.join(dirname, path);
    fs.writeFileSync('./config/config.txt', fullPath);
}

exports.get = () => {
    let fullPath = fs.readFileSync('./config/config.txt', 'utf8');
    return fullPath;
}