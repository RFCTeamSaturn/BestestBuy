import React from 'react';
import './app.scss';
import Navbar from './header/Navbar';
import ProductOverview from './overview/ProductOverview';
import RelatedProducts from './relatedProducts/RelatedProducts';
import QuestionsAndAnswers from './Q_and_A/QuestionsAndAnswers';
import RatingsAndReviews from './R&R/RatingsAndReviews';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="app">
        <Navbar />
        <div><ProductOverview /></div>
        <div><RelatedProducts /></div>
        <div><QuestionsAndAnswers /></div>
        <div><RatingsAndReviews /></div>
      </div>
    );
  }
}

export default App;
