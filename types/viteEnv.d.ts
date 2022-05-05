interface ViteEnv {
  VITE_URL: string
  VITE_APP: boolean
  VITE_NUM: number
}

interface ImportMetaEnv extends ViteEnv {}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
