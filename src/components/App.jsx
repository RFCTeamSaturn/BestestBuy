import React from 'react';
import './app.scss';
import Header from './header/Header';
import ProductOverview from './overview/ProductOverview';
import RelatedProducts from './relatedProducts/RelatedProducts';
import QuestionsList from './Q&A/QuestionsList';
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
        <Header />
        <div><ProductOverview /></div>
        <div><RelatedProducts /></div>
        <div><QuestionsList /></div>
        <div><RatingsAndReviews /></div>
      </div>
    );
  }
}

export default App;
