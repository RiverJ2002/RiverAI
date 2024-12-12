// AIzaSyDcgqJRtyuORcu22kktac6o6FlWiCR2AaE


import { GoogleGenerativeAI } from "@google/generative-ai";  

const genAI = new GoogleGenerativeAI("AIzaSyDcgqJRtyuORcu22kktac6o6FlWiCR2AaE");  
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });  

const prompt = "why do stars die";  

const result = await model.generateContent(prompt);  


console.log(result.response.text());