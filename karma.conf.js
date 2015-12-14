/* eslint-env node*/

module.exports = function (config) {
  "use strict";

  config.set({

    basePath: "./",

    files: [],

    jspm: {
      serveFiles: [
        "src/**/*.js",
        "index.js"
      ],
      loadFiles: [
        "tests/**/*.js"
      ],
      stripExtension: false
    },

    autoWatch: true,

    frameworks: ["jspm", "jasmine"],

    browsers: ["Chrome"],

    plugins: [
      "karma-jspm",
      "karma-chrome-launcher",
      "karma-firefox-launcher",
      "karma-jasmine",
      "karma-junit-reporter"
    ],

    junitReporter: {
      outputFile: "test_out/unit.xml",
      suite: "unit"
    }

  });
};
