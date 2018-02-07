import React, { Component } from 'react';
import Loader from './Loader';
import fetch from '../services';

import './styles.css';

export default (Comp, url) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = { data: null, loading: true };
    }

    componentDidMount() {
      fetch(url).then((result) => {
        this.setState({ data: result, loading: false });
      })
    }

    render() {
      const { loading, data } = this.state;
      return (
        <div>
          { loading ? <Loader /> : <Comp data={data} /> }
        </div>
      );
    }
  }
}
