/// <reference types="vite/client" />

declare module "*.mdx" {
  import type { ComponentType } from "react";
  const Component: ComponentType & {
    frontmatter?: {
      title?: string;
      date?: string;
    };
  };
  export default Component;
}
