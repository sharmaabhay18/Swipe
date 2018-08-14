import React, { Component } from 'react';
import { Animated, ScrollView } from 'react-native';

class Deck extends Component {

  renderCards() {
     return this.props.data.map(item => {
       return this.props.renderCard(item);
     });
  }

  render() {
    console.log(this.props);
    return (
       <ScrollView style={{ flex: 1 }}>
       {this.renderCards()}
       </ScrollView>
    );
  }
}

export default Deck;
