import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeHighlight from "rehype-highlight";

export default defineConfig({
  plugins: [
    mdx({
      remarkPlugins: [
        remarkFrontmatter,
        remarkMdxFrontmatter,
        remarkGfm,
        [remarkRehype, { allowDangerousHtml: true }]
      ],
      rehypePlugins: [
        [rehypeHighlight, { ignoreMissing: true }]
      ],
    }),
    react({
      include: ["**/*.jsx", "**/*.tsx"],
      exclude: ["**/*.mdx"],
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  }
});
