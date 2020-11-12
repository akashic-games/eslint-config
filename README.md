# eslint-config
akashic-games リポジトリで共通的に利用する eslint プリセットです。
使用側は TypeScript が必要となります。

## 使い方
### インストール
package.json の devDependencies に下記が必要です。
```sh
npm install --save-dev @akashic/eslint-config @typescript-eslint/eslint-plugin eslint eslint-plugin-import eslint-plugin-jest
```

### 設定ファイルの書き方
プロジェクトのルートディレクトリに `.eslintrc` を配置します。

`.eslintrc` に以下のように記載します。
```json
{
    "extends": "@akashic/eslint-config",
    "parserOptions": {
        "project": "tsconfig.json",
        "sourceType": "module"
    }
}
```

### 実行方法
```sh
"eslint -c .eslintrc src/**/*.ts --fix
```

## ライセンス
本リポジトリは MIT License の元で公開されています。
詳しくは [LICENSE](https://github.com/akashic-games/remark-preset-lint/blob/master/LICENSE) をご覧ください。

ただし、画像ファイルおよび音声ファイルは
[CC BY 2.1 JP](https://creativecommons.org/licenses/by/2.1/jp/) の元で公開されています。
