import React from "react";
import { ScrollView, Text } from "react-native";
import {
  AvatarHeader,
  Container,
  DisplayStats,
  Header,
  HeaderBar,
  HeaderText,
  StatsCell,
  StatsNumberText,
  StatsTitleText,
} from "./styles";
import { useAuth } from "../../contexts/user";
import { Feather } from "@expo/vector-icons";
import { OpacityButton, OpacityButtonText } from "../../global-styles/buttons";
import Info from "../../components/displayInfo";
import { User } from "../../models/user";
import { useNavigation } from "@react-navigation/native";
interface UserInfoProps {
  user: User | null;
  isHome?: boolean;
}
const Home: React.FC<UserInfoProps> = ({ user, isHome }) => {
  const navigation = useNavigation();
  const {
    signOut,
    followerViewing,
    followingViewing,
    signIn,
    visitUser,
  } = useAuth();
  function handleMenu() {
    if (!isHome) {
      signIn(`${user?.login}`);
      followerViewing && visitUser("", "seguidores");
      followingViewing && visitUser("", "seguindo");
      navigation.navigate("Home");
    } else {
      signOut();
    }
  }
  function handleBack() {
    followerViewing && visitUser("", "seguidores");
    followingViewing && visitUser("", "seguindo");
  }
  return (
    <Container>
      <Header>
        <HeaderBar>
          {!isHome && (
            <OpacityButton onPress={handleBack}>
              <Feather name="arrow-left" size={24} color="#ffffff" />
            </OpacityButton>
          )}
          <HeaderText>#{user?.login}</HeaderText>
          <OpacityButton onPress={handleMenu}>
            <OpacityButtonText>{!isHome ? "Salvar" : "Sair"}</OpacityButtonText>
            <Feather
              name="log-out"
              size={24}
              color={!isHome ? "#5CBC29" : "#D03434"}
            />
          </OpacityButton>
        </HeaderBar>
        <AvatarHeader source={{ uri: user?.avatar_url }} />
      </Header>
      <ScrollView>
        <Info
          title={user?.name}
          description={`${user?.email ? user?.email + "\n" : ""}${
            user?.location ? user?.location : ""
          }`}
        />
        <DisplayStats>
          <StatsCell>
            <StatsNumberText>{user?.followers}</StatsNumberText>
            <StatsTitleText>Seguidores</StatsTitleText>
          </StatsCell>
          <StatsCell>
            <StatsNumberText>{user?.following}</StatsNumberText>
            <StatsTitleText>Seguindo</StatsTitleText>
          </StatsCell>
          <StatsCell>
            <StatsNumberText>{user?.public_repos}</StatsNumberText>
            <StatsTitleText>Repos</StatsTitleText>
          </StatsCell>
        </DisplayStats>
        <Info title="bio" description={user?.bio ? user?.bio : ""} />
      </ScrollView>
    </Container>
  );
};

export default Home;
