import ollama from 'ollama';  

const GetResponse = async (prompt) => {  
  const response = await ollama.chat({  
    model: 'llama3.2:1b',  
    messages: [{ role: 'user', content: prompt }],  
  });  

  return response.message.content;  
};  

const result = 
console.log(result);