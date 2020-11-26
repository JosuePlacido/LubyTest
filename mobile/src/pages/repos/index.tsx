import React, { useState } from "react";
import { View, Text } from "react-native";
import { Container, HeaderBar, HeaderText } from "./styles";
import { Feather } from "@expo/vector-icons";
import { OpacityButton } from "../../global-styles/buttons";
import { ScrollView } from "react-native-gesture-handler";
import RepoItem from "../../components/repo-item";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import Repo from "../../models/repo";
import { useAuth } from "../../contexts/user";
const repos: React.FC = () => {
  const navigation = useNavigation();
  const { loadRepo, repos } = useAuth();
  function handleBack() {
    navigation.goBack();
  }
  useFocusEffect(() => {
    loadRepo();
  });
  return (
    <Container>
      <HeaderBar>
        <OpacityButton onPress={handleBack}>
          <Feather name="arrow-left" size={24} color="#ffffff" />
        </OpacityButton>
        <HeaderText>{repos.length} repositórios</HeaderText>
      </HeaderBar>
      <ScrollView>
        {repos.map((repo) => (
          <RepoItem key={repo.id} repo={repo} />
        ))}
      </ScrollView>
    </Container>
  );
};

export default repos;
