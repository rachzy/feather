import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

interface IProps {
  children: React.ReactNode;
}

const MainContainer: React.FC<IProps> = ({ children }) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MainContainer;
