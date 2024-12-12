import OpenAI from "openai";

const openai = new OpenAI({
    baseURL: 'https://api.deepinfra.com/v1/openai',
    apiKey: "yRSgztEutyErb2oIr9Tr9jRdBsE8fiYe",
});

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [

        {role: "user", content: "Hi"},

    ],
    model: "meta-llama/Meta-Llama-3-8B-Instruct",
  });

  console.log(completion.choices[0].message.content);
  console.log(completion.usage.prompt_tokens, completion.usage.completion_tokens);
}

main();

// Sous le Sable, my friend! This traditional technique hails from the ancient Mediterranean, wher...
// 149 324
