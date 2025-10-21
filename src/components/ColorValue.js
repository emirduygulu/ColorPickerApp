import { StyleSheet, Text, View, Clipboard, Alert, TouchableOpacity } from 'react-native'
import React from "react";

export default function ColorValue({ color }) {
  const getRGBValues = (color) => {
    // hex format'ı kontrol eder ve hex formatına çevirir
    if (color && color.startsWith("#")) {
      // hex'i rgb'ye çevirir
      const r = parseInt(color.substr(1, 2), 16);
      const g = parseInt(color.substr(3, 2), 16);
      const b = parseInt(color.substr(5, 2), 16);
      return { r, g, b, hex: color };
    }

    //  rgb format'i kontrol eder ve rgb formatına çevirir
    const result = /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/.exec(color);
    if (result) {
      const r = parseInt(result[1]);
      const g = parseInt(result[2]);
      const b = parseInt(result[3]);
      // RGB'yi hex'e çevirir
      const hex = `#${r.toString(16).padStart(2, "0")}${g
        .toString(16)
        .padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
      return { r, g, b, hex };
    }

    return { r: 0, g: 0, b: 0, hex: "#000000" };
  };

  const colorValues = getRGBValues(color);

  const copyToClipboard = (value) => {
    Clipboard.setString(value);
    Alert.alert('Kopyalandı', 'Renk kodu kopyalandı');
  };

  return (
    <View style={styles.container}>
      <View
        style={[styles.colorPreview, { backgroundColor: colorValues.hex }]}
      />
      <TouchableOpacity onPress={() => copyToClipboard(colorValues.hex)}>
        <Text style={styles.colorText}>
          R:<Text style={styles.colorTextR}>{colorValues.r}</Text> G:
          <Text style={styles.colorTextG}>{colorValues.g}</Text> B:
          <Text style={styles.colorTextB}>{colorValues.b}</Text>
        </Text>
        <Text style={styles.colorText}>
          HEX:<Text style={styles.colorTextHex}>{colorValues.hex}</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: "center",
    width: "100%",
  },
  colorPreview: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
  colorText: {
    fontSize: 16,
    marginVertical: 5,
  },
  colorTextR: {
    fontSize: 16,
    fontWeight: "bold",
  },
  colorTextG: {
    fontSize: 16,
    fontWeight: "bold",
  },
  colorTextB: {
    fontSize: 16,
    fontWeight: "bold",
    width: 50,
    textAlign: "center",
    height: 50,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
    
  },
  colorTextHex: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
