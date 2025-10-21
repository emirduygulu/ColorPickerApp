import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import RandomColor from '../components/RandomColor';
import ColorArea from '../components/ColorArea';
import ColorValue from '../components/ColorValue';

export default function ColorPickerPage() {
  const [selectedColor, setSelectedColor] = useState('#FFFFFF');

  return (
    <View style={styles.container}>
      <RandomColor onSelect={setSelectedColor} />
      <ColorArea onColorChangeComplete={setSelectedColor} />
      <ColorValue color={selectedColor} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
});