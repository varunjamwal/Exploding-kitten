const genCard = () => {
  const cardObj = { 1: 'Cat card', 2: 'Exploding kitten card', 3: 'Shuffle card', 4: 'Defuse card' };
  let cardArray = [];
  const numCards = 5;
  const genRandom = () => Math.floor(Math.random() * (5 - 1) + 1);  //generate random num between 1 and 5
  for (let i = 0; i < numCards; i++) cardArray.push(cardObj[genRandom()]);
  return cardArray;
};
export default genCard;
