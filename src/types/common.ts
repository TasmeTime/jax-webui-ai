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

export const initOllamaOptions: IOllamaOptions = {
  num_keep: 5,
  seed: 42,
  num_predict: 100,
  top_k: 20,
  top_p: 0.9,
  tfs_z: 0.5,
  typical_p: 0.7,
  repeat_last_n: 33,
  temperature: 0.8,
  repeat_penalty: 1.2,
  presence_penalty: 1.5,
  frequency_penalty: 1.0,
  mirostat: 1,
  mirostat_tau: 0.8,
  mirostat_eta: 0.6,
  penalize_newline: true,
  stop: ["\n", "user:"],
  numa: false,
  num_ctx: 1024 * 2,
  num_batch: 2,
  num_gpu: 1,
  main_gpu: 0,
  low_vram: false,
  f16_kv: true,
  vocab_only: false,
  use_mmap: true,
  use_mlock: false,
  num_thread: 8,
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
