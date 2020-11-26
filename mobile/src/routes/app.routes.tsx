import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, Feather } from "@expo/vector-icons";
import UserView from "../pages/home";
import Repos from "../pages/repos";
import UserList from "../components/userList";
import { useAuth } from "../contexts/user";
import FollowersPage from "../pages/followers";
import FollowingPage from "../pages/following";

const { Navigator, Screen } = createBottomTabNavigator();
function Tabs() {
  const { user } = useAuth();
  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 64,
          overflow: "hidden",
        },
        tabStyle: {
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
        labelStyle: {
          fontFamily: "Nunito_600SemiBold",
          fontSize: 13,
        },
        inactiveBackgroundColor: "#fafafc",
        activeBackgroundColor: "#fff",
        inactiveTintColor: "#A5A5A5",
        activeTintColor: "#3E3E3E",
      }}
    >
      <Screen
        name="Home"
        children={() => <UserView user={user} isHome={true} />}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Feather
                name="home"
                color={focused ? "#3E3E3E" : color}
                size={size}
              />
            );
          },
        }}
      />
      <Screen
        name="Repos"
        component={Repos}
        options={{
          tabBarLabel: "Repos",
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Feather
                name="github"
                color={focused ? "#3E3E3E" : color}
                size={size}
              />
            );
          },
        }}
      />
      <Screen
        name="Followers"
        component={FollowersPage}
        options={{
          tabBarLabel: "Seguidores",
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Feather
                name="users"
                color={focused ? "#3E3E3E" : color}
                size={size}
              />
            );
          },
        }}
      />
      <Screen
        name="Following"
        component={FollowingPage}
        options={{
          tabBarLabel: "Seguindo",
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Feather
                name="users"
                color={focused ? "#3E3E3E" : color}
                size={size}
              />
            );
          },
        }}
      />
    </Navigator>
  );
}

export default Tabs;
