import React from "react";
import { StyleSheet, View } from "react-native";

interface IProps {
  children: React.ReactNode;
}

const MiddleContainer: React.FC<IProps> = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});

export default MiddleContainer;
