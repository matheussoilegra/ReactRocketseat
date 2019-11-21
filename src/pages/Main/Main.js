import React, { Component } from 'react';
import api from '../../services/Api';

export default class Main extends Component {
  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async () => {
    const response = await api.get('/products');

    console.log(response.data.docs);
  };

  render() {
    return <h1>Hellooooo</h1>;
  }
}
