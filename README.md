**Jax WebUi Project Overview**

### Overview

The Jax WebUi project aims to create a simple web-based interface for connecting with your local Ollama server and engaging in chat conversations. This project utilizes the Ollama API to facilitate seamless interactions between users and the AI-powered Ollama server.

I hope that this project can provide a useful starting point for exploring the capabilities of Ollama's AI technology. If you have any feedback or suggestions, please don't hesitate to reach out!

### Installation of Ollama (Skip of if you have ollama installed already)

Before using Jax WebUi, make sure you have Ollama installed on your local machine. You can download the latest version from [Ollama's official website](https://ollama.com).

### Cloning the GitHub Repo

To get started with the Jax WebUi project, clone the repository using the following steps:

1. **Create a New Directory**: Create a new directory on your local machine to store the project files.
2. **Clone the Repository**: Open a terminal or command prompt and navigate to the new directory. Then, run the following command to clone the Jax WebUi repository:

```
git clone https://github.com/tasmetime/jax-webui-ai.git
```

### Install the dependencies

1. Go to the project's directory that you have created before:

```bash
cd jax-webui-ai
```

2. Run the following command to install the dependencies:

```bash
npm run i
```

### Run the project

1. Start the server by running:

```bash
npm start
```

### Notes

Please update this value based on your model's `ctx_num` (context number):

```js
const [maxContextSize, setMaxContextSize] = useState(1024 * 2);
```

In this case, `1024 * 2` is the max context size.

Now you can access Jax WebUi by visiting http://localhost:3000 on your computer.

## **To Do**

- [ ] Add Darkmod
- [ ] Create a YouTube video showcasing Jax WebUi's features and how to write it from scratch! (I'll really do that! Check my YouTube channel https://yotube.com/tasmetime)
- [ ] Add a copy button for AI responses
- [ ] Make the chats support Markdown formatting
- [ ] Add settings to modify options (ctx_num, etc.)
- [ ] List installed models so users can switch between them

That's it! I hope you find this project useful, and I'm happy to hear any feedback or suggestions you may have.
