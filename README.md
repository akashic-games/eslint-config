# eslint-config
akashic-games リポジトリで共通的に利用する eslint プリセットです。

## 使い方
### インストール
```sh
npm install --save-dev eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-import @akashic/eslint-config
```

### 設定ファイルの書き方
`.eslintrc` に以下のように記載します。
```json
{
    "extends": "@akashic/eslint-config"
}
```

### 実行方法
```sh
"eslint -c .eslintrc.js \"src/**/*.ts\" --fix"
```

## ライセンス
本リポジトリは MIT License の元で公開されています。
詳しくは [LICENSE](https://github.com/akashic-games/remark-preset-lint/blob/master/LICENSE) をご覧ください。

ただし、画像ファイルおよび音声ファイルは
[CC BY 2.1 JP](https://creativecommons.org/licenses/by/2.1/jp/) の元で公開されています。
