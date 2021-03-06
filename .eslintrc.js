module.exports = {
    'env': {
        'browser': true,
        'node': true,
        'es6': true,
        'jasmine': true
    },
    'extends': 'eslint:recommended',
    'rules': {
        'indent': ['error', 4, {'SwitchCase': 1}],
        'linebreak-style': ['error', 'unix'],
        'quotes': ['error', 'single'],
        'semi': ['error', 'always']
    }
};