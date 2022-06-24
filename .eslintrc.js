module.exports = {
  "extends": "airbnb-base",
  
  "env": {
    browser: true,
    es6: true
  },
  "rules": {
    "max-len" : ["error", {code : 300}],
    'no-console': 'off',
    "no-param-reassign": ["error", { "props": false }],
    "class-methods-use-this": "off",
    "linebreak-style": [0 ,"error", "windows"],
  },
};
