import React from 'react';
import axios from 'axios';
import config from '../../config';
import ProductInformation from './ProductInformation';

const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/';
const id = '66642';

class ProductOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      title: '',
    };
  }

  componentDidMount() {
    this.fetchProductData();
  }

  fetchProductData() {
    axios.get(
      `${url}products/${id}`,
      {
        headers: {
          Authorization: config.TOKEN,
        },
      },
    )
      .then((productInfo) => {
        this.setState({
          category: productInfo.data.category,
          title: productInfo.data.name,
        });
      })
      .catch();
  }

  render() {
    const { category } = this.state;
    const { title } = this.state;
    return (
      <div className="product_overview_block">
        <div>ImageGallery</div>
        <div><ProductInformation category={category} title={title} /></div>
      </div>
    );
  }
}

export default ProductOverview;
