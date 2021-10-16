import React from 'react';
import Header from '../../layout/Header/Header';
import MainSection from '../../layout/MainSection/MainSection';

const Home = () => {
  return (
    <section>
      <Header />
      <MainSection variant={'home'} />
    </section>
  );
};

export default Home;
