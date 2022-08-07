import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableHighlight } from "react-native";
import { Inter_700Bold, useFonts } from "@expo-google-fonts/inter";

import DefaultContainer from "../Components/DefaultContainer";
import MainContainer from "../Components/MainContainer";

import { IDevice } from "../App";

interface IParams {
  setDevice: React.Dispatch<React.SetStateAction<IDevice>>;
}

interface IProps {
  route?: any;
  navigation?: any;
}

const NewID: React.FC<IProps> = ({ route, navigation }) => {
  const { setDevice }: IParams = route.params;
  const [inputValue, setInputValue] = useState("");
  const [callbackMessage, setCallbackMessage] = useState({
    value: "",
    error: false,
  });

  let [fontsLoaded] = useFonts({
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <></>;
  }

  const handleInputChange = (text: string) => {
    setInputValue(text);
  };

  const handleButtonClick = () => {
    setCallbackMessage({
      value: "Connecting...",
      error: false,
    });

    if (!inputValue)
      return setCallbackMessage({
        value: "Please fill this field.",
        error: true,
      });
    setDevice((currentValue) => {
      let newValue: IDevice = {
        ...currentValue,
        id: inputValue,
      };
      return newValue;
    });
    setTimeout(() => {
      navigation.navigate("Main");
    }, 500);
  };

  return (
    <MainContainer>
      <DefaultContainer>
        <Text style={styles.title}>Your Feather ID:</Text>
        <TextInput
          onChangeText={handleInputChange}
          style={styles.input}
          placeholder="Ex: AISR24HUBUAD"
        />
        <Text style={{ color: callbackMessage.error ? "red" : "white" }}>
          {callbackMessage.value}
        </Text>
        <TouchableHighlight
          onPress={handleButtonClick}
          style={[
            styles.button,
            {
              backgroundColor: inputValue
                ? "chartreuse"
                : "rgba(128, 255, 0, 0.63)",
            },
          ]}
        >
          <Text style={styles.label}>OK</Text>
        </TouchableHighlight>
      </DefaultContainer>
    </MainContainer>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontSize: 24,
    fontFamily: "Inter_700Bold",
    marginBottom: 10,
  },
  input: {
    color: "white",
    textAlign: "center",
    padding: 10,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "white",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "chartreuse",
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  label: {
    color: "white",
    fontWeight: "900",
  },
});

export default NewID;
