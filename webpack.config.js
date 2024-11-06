const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");

module.exports = {
    mode: process.env.NODE_ENV || "development",
    entry: {
        popup: "./src/popup.js"
    },
    output: {
        path: path.resolve(__dirname, "dist/"),
        filename: "[name].js", // 出力ファイル名を明示的に指定
        clean: true // ビルド時に dist ディレクトリをクリーン
    },
    experiments: {
        asyncWebAssembly: true,
    },
    module: {
        rules: [
            { 
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/ // node_modules を除外
            }
        ]
    },
    plugins: [
        new WasmPackPlugin({
            crateDirectory: path.resolve(__dirname, "wasm-game-of-life"),
            outDir: path.resolve(__dirname, "wasm-game-of-life/pkg"),
            outName: "wasm_game_of_life"
        }),
        new CopyWebpackPlugin({
            patterns: [
                { 
                    from: "static",
                    to: ".",
                    noErrorOnMissing: true // static フォルダが存在しない場合もエラーにしない
                }
            ]
        })
    ],
    devtool: "inline-source-map",
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".wasm"]
    },
    cache: {
        type: 'filesystem' // ビルドのキャッシュを有効化
    }
};