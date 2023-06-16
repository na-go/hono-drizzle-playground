# hono-drizzle-template

## 最初に
まずD1をworkerが使える環境で始めてください。
その上でwrangler.toml.devをwrangler.tomlに変更して始めてください（publicにする上でコイツラを隠す方法がすぐわかんなかった）

## 使い方
<details>
<summary>テンプレートの初回設定</summary>

1. wrangler.toml.devをwrangler.tomlに変更してworkerの名前を設定
2. D1のDBを作る

```bash
npx wrangler d1 create DBの名前
```
このとき表示される以下の情報をwrangler.tomlに追加する
```bash
[[d1_databases]]
binding = "DB" # i.e. available in your Worker on env.DB
database_name = "DBの名前"
database_id = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
```

3. install
```bash
npm i
```

4. package.jsonのscriptsの以下にある任意の名前にD1DBの名前を入れる
```bash
"migrate": "wrangler d1 migrations apply 任意の名前 --local",
"production-migrate": "wrangler d1 migrations apply 任意の名前",
```

5. local migrate
```bash
npm run generate
npm run migrate
```

6. local start
```bash
npm run dev
```
/api/usersにアクセスしてみて404でなければ問題なし

7. production migrate
```bash
npm run migrate
```

8. production start
```bash
npm run start
```
同じく /api/usersにアクセスしてみて404でなければ問題なし

9. publish
```bash
npm run publish
```

以上でcloudflare workerにデプロイされる
</details>


## development
```bash
npm install
npm run dev
```

## local-migration
```bash
npm run generate
npm run migrate
```

## produciton-migration
```bash
npm run generate
npm run production-migrate
```

## Publish
```bash
npm run publish
```
