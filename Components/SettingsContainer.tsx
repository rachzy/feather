import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Animated,
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";

interface IProps {
  isEnabled: boolean;
  setIsEnabled: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

const SettingsContainer: React.FC<IProps> = ({
  isEnabled,
  setIsEnabled,
  children,
}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (!isEnabled) return;
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [fadeAnim, isEnabled]);

  const handleCloseSettingsClick = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
    setTimeout(() => {
      setIsEnabled(false);
    }, 200);
  };
  return (
    <Animated.View
      style={[
        styles.window,
        { display: isEnabled ? "flex" : "none", opacity: fadeAnim },
      ]}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.label}>Settings</Text>
          <TouchableHighlight onPress={handleCloseSettingsClick}>
            <EvilIcons name="close" size={36} color="white" />
          </TouchableHighlight>
        </View>
        {children}
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  window: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    width: "100%",
    height: "100%",
    position: "absolute",
    alignItems: "flex-end",
  },
  container: {
    flex: 1,
    width: "60%",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    padding: 5,
    paddingTop: "15%",
    alignItems: "center",
  },
  header: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  label: {
    color: "white",
    fontSize: 18,
    fontWeight: "800",
  },
});

export default SettingsContainer;
