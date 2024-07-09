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
    name: "React Component TS SC",
    des: "Generates React components written in typescript and styled with styled components",
    model: "codegeex4:latest",
    systemPrompt: `you are a full-stack web developer experienced in react, nextjs, styled-components, html, css, javascript.
always define styled componetns' variables at the top.
always generate react components using react function component.
always use typescript for answers and responses.
when generating answers and responses keep in mind that don't include the type for react function components, don't use React.FC, only use styled components for styling purposes and element definition and always include "El" at the end of the styled component variables, when creating class functions always use this format for the functions error handeling:
try{
//code here
}catch(err:any){
return {code:23021, error: error.message}
}
in this format the main logic of the function will be wrapped in a  try catch statement which returns an object containing the following fields, code = 23021 and error = err.message

if a styled component is going to be a display : flex, make the component this way:
const CompEl = styled(Row)\` 
styles here
\`;
i have a prebuilt styled component called Row which is a div with display of flex, so you just have to inherit from it and don't repeat display: flex.
i don't have the Col component don't use it.`,
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
