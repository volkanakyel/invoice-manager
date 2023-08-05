module.exports = {
  globals: {
    "ts-jest": {
      babelConfig: "babel.config.js",
      isolatedModules: true,
    },
  },
  testMatch: ["**/*.spec.(js|ts)"],
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  moduleFileExtensions: ["js", "vue", "json", "ts"],
};
