/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly SEU_SEGREDO: string;      // Variável de servidor
  readonly PUBLIC_CHAVE_API: string; // Variável acessível no cliente
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
