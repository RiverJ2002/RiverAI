
import { CohereClientV2 } from 'cohere-ai';

const cohere = new CohereClientV2({
  token: 'Tzj8rOYyPV3lWS7xIUIPYtTHuvAkBy0KsgrWyFFF',
});
(async () => {
  const response = await cohere.chat({
    model: 'command-r-plus',
    messages: [
      {
        role: 'user',
        content: 'hello how do stars die?!',
      },

      {
        role: 'assistant',
        content: 'stars die when they run out of gas',
      },

      {
        role: 'user',
        content: 'what was my question in the my last message? ans what did you answer',
      },
    ],
  });

  
  console.log(response.message);
})();


