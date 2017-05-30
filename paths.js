
const path = require('path');

const root = __dirname;
const node_modules = path.join(root, 'node_modules');
const bin = path.join(node_modules, '.bin');

const src = path.join(root, 'src');
const dist = path.join(root, 'dist');

const lib = path.join(src, 'lib');

function join(root) {
	return function (...args) {
		return path.join(root, ...args);
	}
}

module.exports = {
	root: join(root),
	node_modules: join(node_modules),
	bin: join(bin),
	src: join(src),
	dist: join(dist),
	lib: join(lib)
};