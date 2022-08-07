import React from "react";
import { StyleSheet, View, Platform, StatusBar } from "react-native";

interface IProps {
  center?: boolean;
  row?: boolean;
  children: React.ReactNode;
}

const BottomContainer: React.FC<IProps> = ({ center, row, children }) => {
  const styles = StyleSheet.create({
    container: {
      position: "absolute",
      flexDirection: row ? "row" : "column",
      justifyContent: center ? "center" : "space-between",
      alignItems: center ? "center" : "flex-start",
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      bottom: -1,
      width: "100%",
    },
  });

  return <View style={styles.container}>{children}</View>;
};

export default BottomContainer;
