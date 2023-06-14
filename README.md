# hono-drizzle-playground

## 最初に
まずD1をworkerが使える環境で始めてください。
その上でwrangler.example.txtをwrangler.tomlに変更して始めてください（publicにする上でコイツラを隠す方法がすぐわかんなかった）

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

## Open
```bash
open http://localhost:8788
```

## Publish
```bash
npm run publish
```
