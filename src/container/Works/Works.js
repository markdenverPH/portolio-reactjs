import React, { Component } from 'react'
import items from '../../assets/eachWorkObject';

export default class Works extends Component {
  eachItem = (item => {
    return (
      <h3>{item.title}</h3>
      );
    }
  );

  render() {

    return (
      <div>
        {items.map(item => (this.eachItem(item)))}
      </div>
    )
  }
}
