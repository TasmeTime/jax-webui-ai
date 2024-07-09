import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  AI_MODELS,
  initOllamaOptions,
  IOllamaOptions,
} from "../../types/common";

export interface ISettingsSlice {
  ollamaOptions: IOllamaOptions;
  model: AI_MODELS;
  stream: boolean;
}

export const initialState = {
  ollamaOptions: initOllamaOptions,
  model: AI_MODELS.LLAMA3,
  stream: true,
} as ISettingsSlice;

export const settingsSliceSlice = createSlice({
  name: "settingsSlice",
  initialState,
  reducers: {
    settingsSetModel: (
      state: ISettingsSlice,
      action: PayloadAction<AI_MODELS>
    ) => {
      state.model = action.payload;
    },
    settingsSetStream: (
      state: ISettingsSlice,
      action: PayloadAction<boolean>
    ) => {
      state.stream = action.payload;
    },
    settingsSetOllamaOptions: (
      state: ISettingsSlice,
      action: PayloadAction<Partial<IOllamaOptions>>
    ) => {
      const {
        num_ctx,
        seed,
        temperature,
        f16_kv,
        frequency_penalty,
        low_vram,
        main_gpu,
        mirostat,
        mirostat_eta,
        mirostat_tau,
        num_batch,
        num_gpu,
        num_keep,
        num_predict,
        num_thread,
        numa,
        penalize_newline,
        presence_penalty,
        repeat_last_n,
        repeat_penalty,
        stop,
        tfs_z,
        top_k,
        top_p,
        typical_p,
        use_mlock,
        use_mmap,
        vocab_only,
      } = action.payload;

      if (typeof num_ctx === "number") state.ollamaOptions.num_ctx = num_ctx;
      if (typeof seed === "number") state.ollamaOptions.seed = seed;
      if (typeof temperature === "number")
        state.ollamaOptions.temperature = temperature;
      if (typeof f16_kv === "boolean") state.ollamaOptions.f16_kv = f16_kv;
      if (typeof frequency_penalty === "number")
        state.ollamaOptions.frequency_penalty = frequency_penalty;
      if (typeof low_vram === "boolean")
        state.ollamaOptions.low_vram = low_vram;
      if (typeof main_gpu === "number") state.ollamaOptions.main_gpu = main_gpu;
      if (typeof mirostat === "number" && mirostat !== undefined)
        state.ollamaOptions.mirostat = mirostat;
      if (typeof mirostat_eta === "number")
        state.ollamaOptions.mirostat_eta = mirostat_eta;
      if (typeof mirostat_tau === "number")
        state.ollamaOptions.mirostat_tau = mirostat_tau;
      if (typeof num_batch === "number")
        state.ollamaOptions.num_batch = num_batch;
      if (typeof num_gpu === "number") state.ollamaOptions.num_gpu = num_gpu;
      if (typeof num_keep === "number" && num_keep !== undefined)
        state.ollamaOptions.num_keep = num_keep;
      if (typeof num_predict === "number")
        state.ollamaOptions.num_predict = num_predict;
      if (typeof num_thread === "number")
        state.ollamaOptions.num_thread = num_thread;
      if (typeof numa === "boolean" && numa !== undefined)
        state.ollamaOptions.numa = numa;
      if (
        typeof penalize_newline === "boolean" &&
        penalize_newline !== undefined
      )
        state.ollamaOptions.penalize_newline = penalize_newline;
      if (typeof presence_penalty === "number")
        state.ollamaOptions.presence_penalty = presence_penalty;
      if (typeof repeat_last_n === "number")
        state.ollamaOptions.repeat_last_n = repeat_last_n;
      if (typeof repeat_penalty === "number")
        state.ollamaOptions.repeat_penalty = repeat_penalty;
      if (Array.isArray(stop)) state.ollamaOptions.stop = stop;
      if (typeof tfs_z === "number") state.ollamaOptions.tfs_z = tfs_z;
      if (typeof top_k === "number") state.ollamaOptions.top_k = top_k;
      if (typeof top_p === "number") state.ollamaOptions.top_p = top_p;
      if (typeof typical_p === "number")
        state.ollamaOptions.typical_p = typical_p;
      if (typeof use_mlock === "boolean" && use_mlock !== undefined)
        state.ollamaOptions.use_mlock = use_mlock;
      if (typeof use_mmap === "boolean" && use_mmap !== undefined)
        state.ollamaOptions.use_mmap = use_mmap;
      if (typeof vocab_only === "boolean" && vocab_only !== undefined)
        state.ollamaOptions.vocab_only = vocab_only;
    },
  },
});

// Action creators are generated for each case reducer function
export const { settingsSetModel, settingsSetOllamaOptions, settingsSetStream } =
  settingsSliceSlice.actions;

export default settingsSliceSlice.reducer;
