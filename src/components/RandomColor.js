import { StyleSheet, Text, View, Button, FlatList, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { useState } from "react";

export default function RandomColor({ onSelect }) {
  const [colors, setColors] = useState([]);
  const generateRandomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
  };
  return (
    <View style={styles.container}>
      <Button
        style={styles.button}
        title="Rastgele Renk Bul"
        onPress={() => {
          const color = generateRandomColor();
          setColors([...colors, color]);
        }}
      />
      <ScrollView horizontal style={styles.scrollContainer}>
        {colors.map((color, index) => (
          <TouchableOpacity key={index} onPress={() => onSelect(color)}>
            <View style={[styles.colorBox, { backgroundColor: color }]} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 10,
  },
  button: {
    marginTop: 10,
    marginBottom: 10,
  },
  scrollContainer: {
    flexDirection: 'row',
    marginTop: 10,
    width: '100%',
    height: 80,
  },
  colorBox: {
    width: 50,
    height: 50,
    margin: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
});
