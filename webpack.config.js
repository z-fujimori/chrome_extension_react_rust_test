const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: process.env.NODE_ENV || "development",
    entry: {
        popup: "./src/Popup.tsx"
    },
    output: {
        path: path.resolve(__dirname, "dist/"),
        filename: "[name].js", // 出力ファイル名を明示的に指定
        clean: true // ビルド時に dist ディレクトリをクリーン
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
        extensions: [".tsx", ".ts", ".js"]
    },
    cache: {
        type: 'filesystem' // ビルドのキャッシュを有効化
    }
};