# eslint-config
akashic-games リポジトリで共通的に利用する eslint プリセットです。
使用側は TypeScript が必要となります。

## 使い方
### インストール
package.json の devDependencies に下記が必要です。
```sh
npm install --save-dev eslint globals @akashic/eslint-config
```

ルール追加/上書き等で必要に応じて下記をインストールしてください。

- @stylistic/eslint-plugin-ts
- @typescript-eslint/eslint-plugin
- @typescript-eslint/parser
- eslint-plugin-jest
- eslint-plugin-import

### 設定ファイルの書き方
プロジェクトのルートディレクトリに `eslint.config.js` を配置します。

`eslint.config.js` に以下のように記載します。
```js
const eslintConfig = require("@akashic/eslint-config");

module.exports = [
    ...eslintConfig,
    {
        files: ["**/*.ts"],
        languageOptions: {
            sourceType: "module",
            parserOptions: {
                project: "tsconfig.json",
            }
        }
    }
];
```

### 実行方法
```sh
eslint src/**/*.ts --fix
```

## ライセンス
本リポジトリは MIT License の元で公開されています。
詳しくは [LICENSE](https://github.com/akashic-games/remark-preset-lint/blob/master/LICENSE) をご覧ください。

ただし、画像ファイルおよび音声ファイルは
[CC BY 2.1 JP](https://creativecommons.org/licenses/by/2.1/jp/) の元で公開されています。
