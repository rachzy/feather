import React from "react";
import { Text } from "react-native";
import DefaultContainer from "../Components/DefaultContainer";
import MiddleContainer from "../Components/MiddleContainer";

const Controller = () => {
  return (
    <DefaultContainer>
      <MiddleContainer>
        <Text>Hello World</Text>
      </MiddleContainer>
    </DefaultContainer>
  );
};
