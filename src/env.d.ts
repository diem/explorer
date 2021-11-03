interface ImportMetaEnv extends Readonly<Record<string, string>> {
  readonly VITE_BLOCKCHAIN_REST_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
