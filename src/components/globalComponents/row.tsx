import React, {ReactNode} from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

interface Props {
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
}

export const Row = ({style, children}: Props): JSX.Element => (
  <View style={[styles.container, style]}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
