import loremIpsum from 'lorem-ipsum';

const timeout = ms => new Promise(res => setTimeout(res, ms))

const getMessages = async ({itemNumber = 1, count = 1}) => {
  const messages = [];
  const timestamp = new Date().getTime();
  for (let i = 0; i < itemNumber; i++) {
    messages.push({id: timestamp+i, text: loremIpsum({count, units: 'sentences'})});
  }
  await timeout(2000);
  return messages;
};

export default getMessages;

