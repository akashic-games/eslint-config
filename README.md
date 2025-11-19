# eslint-config
akashic-games リポジトリで共通的に利用する eslint プリセットです。
使用側は TypeScript が必要となります。

## 使い方
### インストール
package.json の devDependencies に下記が必要です。
```sh
npm install --save-dev @akashic/eslint-config
```

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

## 開発者向け

### 本ツールの publish について
* 以下の手順を踏むことで publish が行われます。
  1. package.json の version を更新したコミットを作成
  2. 1 のコミットで master ブランチを更新する
  3. GitHub Actions のリリースワークフローが実行される
* package-lock.json が原因で publish に失敗した場合は、`npm i --before <実行時の7日前の日付(yyyy-mm-dd)>` を実行して package-lock.json を更新し、再度 publish 処理を行なってください。

## ライセンス
本リポジトリは MIT License の元で公開されています。
詳しくは [LICENSE](https://github.com/akashic-games/remark-preset-lint/blob/master/LICENSE) をご覧ください。

ただし、画像ファイルおよび音声ファイルは
[CC BY 2.1 JP](https://creativecommons.org/licenses/by/2.1/jp/) の元で公開されています。
