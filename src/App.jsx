import CardsContainer from './components/cardsContainer/CardsContainer';
import Card from './components/card/Card';

const App = () => {
  return (
    <>
      <CardsContainer>
        <Card
          bgColor='orange'
          src='/assets/images/Group 2.svg'
          title='SEDANS'
          text='Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.'
        />
        <Card
          bgColor='blue'
          src='/assets/images/Group 3.svg'
          title='SUVS'
          text='Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.'
        />
        <Card
          bgColor='green'
          src='/assets/images/Group 4.svg'
          title='LUXURY'
          text='Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style. '
        />
      </CardsContainer>
    </>
  );
};

export default App;
