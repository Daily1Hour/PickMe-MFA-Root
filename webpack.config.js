const path = require("path");
const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-ts");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const dotenv = require("dotenv");

dotenv.config();

module.exports = (webpackConfigEnv, argv) => {
  const orgName = "pickme";
  const defaultConfig = singleSpaDefaults({
    orgName,
    projectName: "root-config",
    webpackConfigEnv,
    argv,
    disableHtmlGeneration: true,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    plugins: [
      new HtmlWebpackPlugin({
        inject: false,
        template: "src/index.ejs",
        templateParameters: {
          isLocal: webpackConfigEnv && webpackConfigEnv.isLocal,
          orgName,
          importMapPath: process.env.IMPORT_MAPS_URL,
        },
      }),
      new CopyWebpackPlugin({
        patterns: [
          { from: "public", to: "" }, // public 폴더 내 정적 파일 복사
        ],
      }),
    ],
    devServer: {
      static: path.resolve(__dirname, "public"), // public 폴더 내 정적 파일 제공
      hot: true,
    },
    output: {
      chunkFormat: "array-push", // 번들을 배열로 푸시하여 처리
    },
  });
};
