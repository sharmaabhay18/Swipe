import React, { Component } from 'react';
import { Animated, View } from 'react-native';

class Ball extends Component {
  componentWillMount() {
    this.position = new Animated.ValueXY(0, 0);
    Animated.spring(this.position, {
      toValue: { x: 200, y: 500 }
    }).start();
  }
  render() {
    return (
       <Animated.View style={this.position.getLayout()}>
       <View style={style.ball} />
       </Animated.View>
    );
  }
}
const style = {
  ball: {
    height: 60,
    width: 60,
    borderWidth: 30,
    borderColor: 'black',
    borderRadius: 30
  }
};

export default Ball;
