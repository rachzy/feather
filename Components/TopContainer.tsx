import React from "react";
import { StyleSheet, View, Platform, StatusBar } from "react-native";

interface IProps {
  children: React.ReactNode;
}

const TopContainer: React.FC<IProps> = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    top: 20,
    width: "100%",
  },
});

export default TopContainer;
