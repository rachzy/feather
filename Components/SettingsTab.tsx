import React from "react";
import { Text, StyleSheet, TouchableHighlight } from "react-native";

interface IProps {
  children: string;
  type?: "default" | "caution" | "access";
  onPress: () => void;
  destructive?: boolean;
  toggleConfigsWindow?: React.Dispatch<React.SetStateAction<boolean>>;
}

const SettingsTab: React.FC<IProps> = ({
  children,
  type,
  onPress,
  destructive,
  toggleConfigsWindow,
}) => {
  if (!type) {
    type = "default";
  }

  const handlePress = () => {
    if (destructive && toggleConfigsWindow) {
      toggleConfigsWindow(false);
    }
    onPress();
  };

  return (
    <TouchableHighlight style={styles.settingsTab} onPress={handlePress}>
      <Text style={styles[type]}>{children}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  settingsTab: {
    width: "100%",
    alignItems: "center",
    padding: 10,
  },
  access: {
    color: "chartreuse",
    fontWeight: "600",
  },
  caution: {
    color: "red",
    fontWeight: "800",
  },
  default: {
    color: "white",
    fontWeight: "800",
  },
});

export default SettingsTab;
