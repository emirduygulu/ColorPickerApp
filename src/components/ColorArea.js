import { StyleSheet, View, Text } from 'react-native';
import React, { useState } from 'react';
import ColorPicker from 'react-native-wheel-color-picker';

export default function ColorArea({ onColorChangeComplete }) {
  const [currentColor, setCurrentColor] = useState('#FFFFFF');

  const onColorChange = (color) => {
    setCurrentColor(color);
  };

  const onColorChangeCompleteHandler = (color) => {
    setCurrentColor(color);
    onColorChangeComplete && onColorChangeComplete(color);
  };

  return (
    <View style={styles.container}>
      <ColorPicker
        color={currentColor}
        onColorChange={onColorChange}
        onColorChangeComplete={onColorChangeCompleteHandler}
        thumbSize={30}
        sliderSize={30}
        noSnap={true}
        row={false}
        style={styles.picker}
      />
      <Text style={styles.colorText}>Seçilen Renk: <Text style={styles.colorTextValue}>{currentColor}</Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  picker: {
    width: 350,
    height: 350,
  },
  colorText: {
    marginTop: 10,
    fontSize: 16,
  },
  colorTextValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});