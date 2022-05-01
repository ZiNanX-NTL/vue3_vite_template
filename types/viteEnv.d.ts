interface viteEnv {
  VITE_URL: string
  VITE_APP: boolean
  VITE_NUM: number
}

type ImportMetaEnv = viteEnv

interface ImportMeta {
  readonly env: ImportMetaEnv
}
