# Vue 3サンプルプロジェクト

このプロジェクトはVue3で作成された◯×ゲームのサンプルです。
`script setup`や状態管理ライブラリの`Pinia`等、Vue 3系で標準的な構成になることが示させている構成で作成しています。

## 実行方法

```sh
cd vue3-sample
npm install
npm run dev
```

## 構成

- プロジェクト構築： create-vue 3.0.7
- Vue本体バージョン： 3.2.26
- 状態管理: Pinia 2.0.9
- ルーティング: Vue Router 4.0.12
- 言語: TypeScript 4.5.4
- コンポーネントの記法: Composition API(script setup)

## 開発環境の設定

- エディターとしてVS Codeを使用している場合は[Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)をインストールしてください
- Vue 2用の機能拡張である[Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)を使用している場合、Volarと競合するため無効化してください
  - インストール済みの機能拡張のリストの歯車アイコンから「Disable (Workspace)」を選択します
  