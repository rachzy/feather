import React from "react";
import { Image, StyleSheet } from "react-native";

const Logo = () => {
  return (
    <Image
      style={styles.logo}
      source={require("../assets/mib-banner.png")}
      fadeDuration={1500}
    />
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
  },
});

export default Logo;
