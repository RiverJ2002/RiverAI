// AIzaSyDcgqJRtyuORcu22kktac6o6FlWiCR2AaE
import { GoogleGenerativeAI } from "@google/generative-ai";  


var history =  [
  {
    role: "user",
    parts: [{ text: "I am tired but motivated" }],
  },
  {
    role: "model",
    parts: [{ text: "Great to meet you. What would you like to know?" }],
  },

  {
    role: "user",
    parts: [{ text: "ascadsvadvd" }],
  },
  {
    role: "model",
    parts: [{ text: "reat to meekmrtrjuktut would iukikryujrye to know?" }],
  },
]


var UseGemeni = async(prompt,history)=>{
  const genAI = new GoogleGenerativeAI('AIzaSyDcgqJRtyuORcu22kktac6o6FlWiCR2AaE');
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });


  const chat = model.startChat({
    history,
  });

  let result = await chat.sendMessageStream(prompt);
  for await (const chunk of result.stream) {
    const chunkText = chunk.text();
    console.log(chunkText);
  }
}


UseGemeni("What did I say at the beginning og this that and what did you answer?",history)