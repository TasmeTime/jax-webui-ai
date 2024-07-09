import { ISettingsSlice } from "../state/slices/settingsSlice";

export default [
  {
    id: 1,
    title: "Cryptid Encounters 🐺💀",
    prompt:
      "You've been tasked with investigating strange sightings of cryptids (mysterious creatures) around the world. Write a report detailing your findings and encounters.",
  },
  {
    id: 2,
    title: "Code Assistant 💻🔧",
    prompt:
      "Generate a python code that calculates sum of the integers from 1 to n",
  },
  {
    id: 3,
    title: "Brainstorm 🤯💡",
    prompt: "Let's do a brainstorm",
  },
];

export interface IAIPreset
  extends Pick<ISettingsSlice, "model" | "ollamaOptions" | "systemPrompt"> {
  id: string;
  name: string;
  des?: string;
}

export const AI_PRESETS: IAIPreset[] = [
  {
    id: "preset_no_1",
    name: "Preset No. 1",
    des: "",
    model: "llama3",
    ollamaOptions: {
      num_ctx: 1024 * 2,
    },
  },
  {
    id: "preset_no_2",
    name: "Preset No. 2",
    model: "llama3",
    ollamaOptions: {},
  },
  {
    id: "preset_no_3",
    name: "Preset No. 3",
    model: "llama3",
    ollamaOptions: {},
  },
  {
    id: "preset_no_4",
    name: "Preset No. 4",
    model: "llama3",
    ollamaOptions: {},
  },
  {
    id: "preset_no_5",
    name: "Preset No. 5",
    model: "llama3",
    ollamaOptions: {},
  },
  
];
