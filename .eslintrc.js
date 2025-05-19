module.exports = {
  ignorePatterns: [
    "**/*.test.js",
    "**/*.test.jsx",
    "**/*.test.ts",
    "**/*.test.tsx",
    "**/*.spec.js",
    "**/*.spec.jsx",
    "**/*.spec.ts",
    "**/*.spec.tsx",
  ],
  extends: ["airbnb", "airbnb/hooks", "plugin:prettier/recommended"],
  rules: {
    "react/react-in-jsx-scope": "off", // Not needed in React 17+
    "react/jsx-props-no-spreading": "off", // Allow props spreading
    "react/require-default-props": "off", // Allow optional props
    "import/prefer-default-export": "off", // Allow single named exports
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }], // Ignore variables starting with _
    "no-console": ["warn", { allow: ["warn", "error"] }], // Allow console.warn and console.error
    "react/prop-types": "off", // Disable prop-types validation
    "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx"] }], // Allow JSX in .js files
    "jsx-a11y/click-events-have-key-events": "off", // Disable click events keyboard requirement
    "jsx-a11y/no-static-element-interactions": "off", // Allow click handlers on non-interactive elements
    "no-shadow": ["error", { allow: ["total"] }], // Allow shadowing of 'total' variable
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }], // Allow dev dependencies
  },
  env: {
    browser: true, // Add browser globals like 'document'
  },
};
