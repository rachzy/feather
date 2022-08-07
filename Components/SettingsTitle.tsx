import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { Inter_300Light, useFonts } from "@expo-google-fonts/inter";

interface IProps {
  type: "default" | "custom";
  name?: string;
  children?: React.ReactNode;
}

const SettingsTitle: React.FC<IProps> = ({ type, name, children }) => {
  let [fontsLoaded] = useFonts({
    Inter_300Light,
  });

  if (!fontsLoaded) {
    return <></>;
  }

  if (type === "custom") {
    return <Text style={styles.title}>{children}</Text>;
  }

  return (
    <View style={styles.userContainer}>
      <Image
        style={styles.pfp}
        source={require("../assets/default-user.png")}
      />
      <Text style={styles.username}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  userContainer: {
    marginBottom: 20,
  },
  title: {
    fontFamily: "Inter_300Light",
    color: "white",
    fontSize: 15,
    fontWeight: "900",
    marginBottom: 30,
  },
  username: {
    color: "lightgray",
    fontWeight: "400",
    textAlign: "center",
  },
  pfp: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius: 50,
  },
});

export default SettingsTitle;
