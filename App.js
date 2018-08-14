import React, { Component } from 'react';
import { Card, Button } from 'react-native-elements';
import { View, Text } from 'react-native';
import Deck from './src/Deck';

const DATA = [
  { id: 1, text: 'Card #1', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 2, text: 'Card #2', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 3, text: 'Card #3', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 4, text: 'Card #4', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
  { id: 5, text: 'Card #5', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 6, text: 'Card #6', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 7, text: 'Card #7', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 8, text: 'Card #8', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
];

class App extends Component {

renderCard(item) {
  return (
    <Card
      key={item.id}
      image={{ uri: item.uri }}
      featuredTitle={item.text}
    >
    <Text style={{ marginBottom: 10 }}>
    The idea with React Native Elements is more about component structure than actual design.
  </Text>
    <Button
      icon={{ name: 'code' }}
      backgroundColor='#03A9F4'
    fontFamily='Lato'
    buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
      title='View'
    />
    </Card>
  );
}

  render() {
    return (
   <Deck
     data={DATA}
     renderCard={this.renderCard}
   />
    );
  }
}

const style = {
  conatiner: {

  }
};

export default App;
