module.exports = {
    "extends": "airbnb-base"
    "rules": {
      "prettier/prettier": [
        "error",
          {
            "singleQuote": true, 
            "trailingComma": "all",
            "bracketSpacing": true,
            "semi": false,
            "parser": "flow"
        }
      ],
      "semi": 0
    }
};
