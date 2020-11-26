import React from "react";
import { Container, HeaderBar, HeaderText } from "./styles";
import { Feather } from "@expo/vector-icons";
import { OpacityButton } from "../../global-styles/buttons";
import { ScrollView } from "react-native-gesture-handler";
import UserItemCell from "../user-item";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import Repo from "../../models/repo";
import { useAuth } from "../../contexts/user";
interface UserListProps {
  urlsufix: string;
  title: string;
}
const UserList: React.FC<UserListProps> = ({ urlsufix, title }) => {
  const navigation = useNavigation();
  const { loadUsers, userList } = useAuth();
  function handleBack() {
    navigation.goBack();
  }
  useFocusEffect(() => {
    loadUsers(urlsufix);
  });
  return (
    <Container>
      <HeaderBar>
        <OpacityButton onPress={handleBack}>
          <Feather name="arrow-left" size={24} color="#ffffff" />
        </OpacityButton>
        <HeaderText>
          {userList.length} {title}
        </HeaderText>
      </HeaderBar>
      <ScrollView>
        {userList.map((user) => (
          <UserItemCell key={user.login} user={user} typeList={title} />
        ))}
      </ScrollView>
    </Container>
  );
};

export default UserList;
