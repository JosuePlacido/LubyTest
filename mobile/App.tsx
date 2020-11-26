import React from "react";
import {
  Nunito_400Regular,
  Nunito_300Light,
  Nunito_700Bold,
  Nunito_600SemiBold,
  useFonts,
} from "@expo-google-fonts/nunito";
import { NavigationContainer } from "@react-navigation/native";
import { AppLoading } from "expo";
import { StatusBar } from "expo-status-bar";

import { UserProvider, useAuth } from "./src/contexts/user";
import Routes from "./src/routes/index";

export default function App() {
  const { loading } = useAuth();
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_300Light,
    Nunito_700Bold,
    Nunito_600SemiBold,
  });
  if (!fontsLoaded || loading) {
    return <AppLoading />;
  }
  return (
    <NavigationContainer>
      <UserProvider>
        <Routes />
        <StatusBar style="light" />
      </UserProvider>
    </NavigationContainer>
  );
}
