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
