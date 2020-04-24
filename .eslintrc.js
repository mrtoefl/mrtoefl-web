module.exports = {
  "env": {
      "browser": true,
      "node": true,
      "es6": true
  },
  "parserOptions": {
      "ecmaFeatures": {
          "experimentalObjectRestSpread": true,
          "jsx": true
      },
      "sourceType": "module"
  },
  "extends": ["eslint:recommended", "airbnb"],
  "rules":{
    "import/default": 0,
    "import/no-duplicates": 0,
    "import/named": 0,
    "import/namespace": 0,
    "import/no-unresolved": 0,
    "linebreak-style": 0,
    "comma-dangle":0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/react-in-jsx-scope" : false,
    "object-curly-newline" : "never"
  }
};