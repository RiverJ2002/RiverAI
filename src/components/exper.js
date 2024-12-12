import Groq from "groq-sdk";

const groq = new Groq({ apiKey: "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" });

export async function main() {
  const chatCompletion = await getGroqChatCompletion();
  // Print the completion returned by the LLM.
  console.log(chatCompletion.choices[0]?.message?.content || "");
}

export async function getGroqChatCompletion() {
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: "Explain the importance of fast language models",
      },
    ],
    model: "llama-3.2-1b-preview",
  });
}