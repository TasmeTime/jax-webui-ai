export type PROMPT_ROLE = "system" | "user" | "assistant";
export interface IMessage {
  id: string;
  role: PROMPT_ROLE;
  content: string;
}
export enum AI_MODELS {
  DEEPSEEK = "deepseek-coder-v2:latest",
  GEMMA2 = "gemma2:latest",
  LLAMA3 = "llama3:8b",
  PHI3_MINI_4K_INSTRUCT_Q4 = "phi-3-mini-4k-instruct-q4:latest",
}

export const initOllamaOptions: Partial<IOllamaOptions> = {
  num_keep: 5,
  temperature: 0.8,
  num_ctx: 1024 * 2,
};

export interface IOllamaOptions {
  num_keep: number;
  seed: number;
  num_predict: number;
  top_k: number;
  top_p: number;
  tfs_z: number;
  typical_p: number;
  repeat_last_n: number;
  temperature: number;
  repeat_penalty: number;
  presence_penalty: number;
  frequency_penalty: number;
  mirostat: number;
  mirostat_tau: number;
  mirostat_eta: number;
  penalize_newline: true;
  stop: string[]; // ["\n", "user:"];
  numa: false;
  num_ctx: number;
  num_batch: number;
  num_gpu: number;
  main_gpu: number;
  low_vram: false;
  f16_kv: true;
  vocab_only: false;
  use_mmap: true;
  use_mlock: false;
  num_thread: number;
}
