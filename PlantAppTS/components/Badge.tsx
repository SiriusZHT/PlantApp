import React, { Component } from "react";
import { StyleSheet } from "react-native";

import Block from "./Block";
import { theme } from "../constants";

interface IProps{
  [key: number]:any;
  [key: string]:any;
}
export default class Badge extends Component<IProps> {
  render() {
    const { children, style, size, color, ...props } = this.props;

    // Flattens an array of style objects, into one aggregated style object
    const badgeStyles = StyleSheet.flatten([
      styles.badge,
      size && {
        height: size,
        width: size,
        borderRadius: size
      },// rewrite predefined size 
      style// rewrite predefine styles
    ]);

    return (
      <Block
        flex={false}
        middle
        center
        color={color}
        style={badgeStyles}
        {...props}
      >
        {children}
      </Block>
    );
  }
}

const styles:IProps = StyleSheet.create({
  badge: {
    height: theme.sizes.base,
    width: theme.sizes.base,
    borderRadius: theme.sizes.radius
  }
});




