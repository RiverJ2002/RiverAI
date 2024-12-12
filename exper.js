import OpenAI from "openai";

const openai = new OpenAI({
    baseURL: 'https://api.deepinfra.com/v1/openai',
    apiKey: "yRSgztEutyErb2oIr9Tr9jRdBsE8fiYe",
});

async function GetRespponse(prompt) {
  const completion = await openai.chat.completions.create({
    messages: [

        {role: "user", content: prompt},

    ],
    model: "meta-llama/Meta-Llama-3-8B-Instruct",
  });

  return completion.choices[0].message.content
  
}


console.log(await GetRespponse("How are black holes created?"))


