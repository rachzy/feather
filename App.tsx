import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import Main from "./Screens/Main";
import NewID from "./Screens/NewID";

export interface IUser {
  name: string;
}

export interface IDevice {
  id: string;
  name: string;
  version: string;
  height: number;
  speedLimit: number;
  battery: number;
}

const Stack = createNativeStackNavigator();

const App = () => {
  const [user, setUser] = useState<IUser>({ name: "Henrique" });
  const [device, setDevice] = useState<IDevice>({
    id: "DUFH27FHASDB4",
    name: "TAILWIND-HENRIQUE",
    version: "Tailwind 1.0",
    height: 1.5,
    speedLimit: 30,
    battery: 94,
  });

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerShown: false,
          animation: "slide_from_left",
          animationDuration: 1000,
        }}
      >
        <Stack.Screen
          name="Main"
          component={Main}
          initialParams={{ user: user, device: device }}
        />
        <Stack.Screen
          name="NewID"
          component={NewID}
          initialParams={{ setDevice: setDevice }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
