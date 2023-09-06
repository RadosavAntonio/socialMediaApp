import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {globalStyle} from '../../../assets/globalStyles';

interface Props {
  title: string;
}

export const Title = ({title}: Props): JSX.Element => {
  return (
    <SafeAreaView>
      <Text style={globalStyle.title}>{title}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    color: '#022150',
    fontFamily: 'Inter',
    fontSize: 24,
    lineHeight: 29,
    fontWeight: '600',
    letterSpacing: 0.48,
  },
});
