import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// __dirname, __filename の代わりに ES モジュールで使う方法
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Flat Config を旧 `eslintrc` の形式と互換性を持たせる
const compat = new FlatCompat({
  baseDirectory: __dirname, // プロジェクトのルートディレクトリを基準に設定
});

// Next.js の推奨設定を適用しつつ、自動修正可能なルールを追加
const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    files: ["src/**/*.js", "src/**/*.jsx", "src/**/*.ts", "src/**/*.tsx"], // ✅ Next.js の `src/` 配下のファイルを対象
    rules: {
      "semi": ["error", "always"], // ✅ セミコロンを必須にする（自動修正可能）
      "quotes": ["error", "double"], // ✅ 文字列はダブルクォートに統一（自動修正可能）
      "indent": ["error", 2], // ✅ インデントを2スペースに統一（自動修正可能）
      "no-unused-vars": "warn", // ⚠ 使われていない変数は警告（手動修正が必要）
      "react/react-in-jsx-scope": "off", // ✅ React 17 以降では不要
      "react-hooks/rules-of-hooks": "error" // ✅ React Hooks のルール
    }
  }
];

export default eslintConfig;
