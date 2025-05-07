import CardsContainer from './components/cardsContainer/CardsContainer';
import Card from './components/card/Card';
import { v4 } from 'uuid';
import { CARDS_INFO } from './constants/cards-info';

const App = () => {
  return (
    <>
      <CardsContainer>
        {CARDS_INFO.map(card => (
          <Card
            key={v4()}
            {...card}
            // color={card.color}
            // src={card.src}
            // title={card.title}
            // text={card.text}
          />
        ))}
      </CardsContainer>
    </>
  );
};

export default App;
