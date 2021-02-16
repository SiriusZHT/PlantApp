import React, { Component } from "react";
import { StyleSheet } from "react-native";

import { AppLoading } from "expo";
import { Asset } from "expo-asset";

import Navigation from "./navigation";
import { Block } from "./components";

// import all used images
const images = [
  require("./assets/icons/back.png").default,
  require("./assets/icons/plants.png").default,
  require("./assets/icons/seeds.png").default,
  require("./assets/icons/flowers.png").default,
  require("./assets/icons/sprayers.png").default,
  require("./assets/icons/pots.png").default,
  require("./assets/icons/fertilizers.png").default,
  require("./assets/images/plants_1.png").default,
  require("./assets/images/plants_2.png").default,
  require("./assets/images/plants_3.png").default,
  require("./assets/images/explore_1.png").default,
  require("./assets/images/explore_2.png").default,
  require("./assets/images/explore_3.png").default,
  require("./assets/images/explore_4.png").default,
  require("./assets/images/explore_5.png").default,
  require("./assets/images/explore_6.png").default,
  require("./assets/images/illustration_1.png").default,
  require("./assets/images/illustration_2.png").default,
  require("./assets/images/illustration_3.png").default,
  require("./assets/images/avatar.png").default
];
//define props use interface
interface IProps{
  skipLoadingScreen:boolean;
}
//define state use interface
interface IState{
  isLoadingComplete:boolean;
}
//insert interface props state
export default class App extends Component<IProps,IState> {
  constructor(props:IProps, state:IState){
    super(props,state);
    this.state = {
      isLoadingComplete:false,
    }
  }

  handleResourcesAsync = async () => {
    // we're caching all the images
    // for better performance on the app

    const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync();
    });

    return Promise.all(cacheImages);
  };

  render() {
    // if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
    //   return (
    //     <AppLoading
    //       startAsync={this.handleResourcesAsync}
    //       onError={(error:any) => console.warn(error)}
    //       onFinish={() => this.setState({ isLoadingComplete: true })}
    //     />
    //   );
    // }

    return (
      <Block white>
        <Navigation />
      </Block>
    );
  }
}

const styles = StyleSheet.create({});
