import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableHighlight } from "react-native";

import { Feather } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Inter_300Light, useFonts } from "@expo-google-fonts/inter";

import MainContainer from "../Components/MainContainer";
import DefaultContainer from "../Components/DefaultContainer";
import ConfigsContainer from "../Components/SettingsContainer";
import ConfigsTitle from "../Components/SettingsTitle";
import ConfigsTab from "../Components/SettingsTab";
import TopContainer from "../Components/TopContainer";
import MiddleContainer from "../Components/MiddleContainer";
import Logo from "../Components/Logo";
import BottomContainer from "../Components/BottomContainer";

import { IUser, IDevice } from "../App";

interface IProps {
  navigation?: any;
  route?: any;
}

interface IParams {
  user: IUser;
  device: IDevice;
}

const Main: React.FC<IProps> = ({ route, navigation }) => {
  const { user, device }: IParams = route.params;

  const [message, setMessage] = useState("");

  const [toggleConfigsWindow, setToggleConfigsWindow] = useState(false);

  let [fontsLoaded] = useFonts({
    Inter_300Light,
  });

  if (!fontsLoaded || !user || !device) {
    return <></>;
  }

  const handleTurnOnButtonClick = () => {
    let stage = 0;

    const animationLoop = setInterval(() => {
      switch (stage) {
        case 1:
          setMessage("Turning Feather on.");
          stage++;
          break;
        case 2:
          setMessage("Turning Feather on..");
          stage++;
          break;
        case 3:
          setMessage("Turning Feather on...");
          stage = 0;
          break;
        default:
          setMessage("Turning Feather on");
          stage++;
          break;
      }
    }, 300);

    setTimeout(() => {
      clearInterval(animationLoop);
    }, 5000);
  };

  return (
    <MainContainer>
      <DefaultContainer>
        <TopContainer>
          <Text style={[styles.message, { fontWeight: "900" }]}>
            ID:{" "}
            <Text style={{ color: "lightgray", fontWeight: "400" }}>
              {device.id}
            </Text>
          </Text>
          <TouchableHighlight
            onPress={() => {
              setToggleConfigsWindow(true);
            }}
          >
            <EvilIcons name="gear" size={36} color="white" />
          </TouchableHighlight>
        </TopContainer>
        <MiddleContainer>
          <TouchableHighlight onPress={handleTurnOnButtonClick}>
            <Feather name="power" size={72} style={styles.turnOnBtn} />
          </TouchableHighlight>
          <Text style={styles.message}>{message}</Text>
        </MiddleContainer>
        <BottomContainer center={true}>
          <Logo />
        </BottomContainer>
      </DefaultContainer>
      <ConfigsContainer
        isEnabled={toggleConfigsWindow}
        setIsEnabled={setToggleConfigsWindow}
      >
        <ConfigsTitle type="default" name={user.name} />

        <ConfigsTab
          onPress={handleTurnOnButtonClick}
          type="access"
          destructive={true}
          toggleConfigsWindow={setToggleConfigsWindow}
        >
          Start
        </ConfigsTab>
        <ConfigsTab
          onPress={() => {
            navigation.navigate("NewID");
          }}
          destructive={true}
          toggleConfigsWindow={setToggleConfigsWindow}
        >
          Disconnect Feather
        </ConfigsTab>
        <ConfigsTab
          onPress={() => {
            console.log("test");
          }}
          type="caution"
        >
          Logout
        </ConfigsTab>
      </ConfigsContainer>
    </MainContainer>
  );
};

const styles = StyleSheet.create({
  turnOnBtn: {
    color: "chartreuse",
    textShadowColor: "green",
    textShadowRadius: 90,
    marginBottom: 30,
  },
  message: {
    fontFamily: "Inter_300Light",
    color: "white",
    fontSize: 15,
  },
});

export default Main;
