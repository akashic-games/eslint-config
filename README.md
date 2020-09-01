# eslint-config
akashic-games リポジトリで共通的に利用する eslint プリセットです。
使用側は TypeScript が必要となります。

## 使い方
### インストール
package.json の devDependencies に下記が必要です。
```json
"devDependencies": {
    "@akashic/eslint-config": "0.1.0",
    "@typescript-eslint/eslint-plugin": "^2.19.2",
    "esint": "^6.8.0",
    "esint-plugin-import": "^2.20.2"
}
```

### 設定ファイルの書き方
`.eslintrc` に以下のように記載します。
```json
{
    "extends": "@akashic/eslint-config"
}
```

### 実行方法
tsconfig.eslint.json を配置します。
tsconfig.eslint.json
```json
{
    "extends": "./tsconfig.json",
    "exclude": []
}
```

```sh
"eslint -c .eslintrc src/**/*.ts --fix
```

## ライセンス
本リポジトリは MIT License の元で公開されています。
詳しくは [LICENSE](https://github.com/akashic-games/remark-preset-lint/blob/master/LICENSE) をご覧ください。

ただし、画像ファイルおよび音声ファイルは
[CC BY 2.1 JP](https://creativecommons.org/licenses/by/2.1/jp/) の元で公開されています。
