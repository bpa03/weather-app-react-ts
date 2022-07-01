/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly APP_TITLE: string
  readonly APP_API: string;
  readonly APP_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}