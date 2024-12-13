// AIzaSyDcgqJRtyuORcu22kktac6o6FlWiCR2AaE
import { GoogleGenerativeAI } from "@google/generative-ai";  



const genAI = new GoogleGenerativeAI('AIzaSyDcgqJRtyuORcu22kktac6o6FlWiCR2AaE');
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
const chat = model.startChat({
  history: [
    {
      role: "user",
      parts: [{ text: "Hello" }],
    },
    {
      role: "model",
      parts: [{ text: "Great to meet you. What would you like to know?" }],
    },
  ],
});
let result = await chat.sendMessageStream("I have 2 dogs in my house.");
for await (const chunk of result.stream) {
  const chunkText = chunk.text();
  console.log(chunkText);
}
result = await chat.sendMessageStream("How many paws are in my house?");
for await (const chunk of result.stream) {
  const chunkText = chunk.text();
  console.log(chunkText);
}