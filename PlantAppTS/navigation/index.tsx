import React, { ReactElement, ReactNode } from "react";
import { Image } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Welcome from "../screens/Welcome" ;
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import Forgot from "../screens/Forgot";
import Explore from "../screens/Explore";
import Browse from "../screens/Browse";
import Product from "../screens/Product";
import Settings from "../screens/Settings";
import { theme } from "../constants";

const screens = createStackNavigator(
  {
    Welcome,
    Login,
    SignUp,
    Forgot,
    Explore,
    Browse,
    Product,
    Settings
  },
  {
    // !if there are cause errors in ios navigation bar so delete them
    // that may due to react-navigation version
    defaultNavigationOptions: {
      title: " ",
      headerStyle: {
        height: theme.sizes.base * 4,
        backgroundColor: theme.colors.white1,
        borderColor: theme.colors.white1,
        borderBottomColor: theme.colors.white1,
        elevation: 0 // for android
      },
      headerBackImage: () => <Image source={require("../assets/icons/back.png")} />,
      headerBackTitle: " ",
      headerLeftContainerStyle: {
        alignItems: "center",
        marginLeft: theme.sizes.base * 2,
        marginBottom: theme.sizes.base / 2,
        paddingRight: theme.sizes.base
      },
      headerRightContainerStyle: {
        alignItems: "center",
        paddingRight: theme.sizes.base
      }
    }
  }
);

export default createAppContainer(screens);
