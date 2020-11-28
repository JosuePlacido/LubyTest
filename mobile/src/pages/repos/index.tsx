import React, { useState } from "react";
import { Container, HeaderBar, HeaderText } from "./styles";
import { Feather } from "@expo/vector-icons";
import { OpacityButton } from "../../global-styles/buttons";
import { ScrollView } from "react-native-gesture-handler";
import RepoItem, { RepoItemShimmer } from "../../components/repo-item";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useAuth } from "../../contexts/user";
import { View, Image, Text, StyleSheet } from "react-native";
import ShimmerText from "../../components/shimmer";
const repos: React.FC = () => {
	const navigation = useNavigation();
	const { loadRepo, repos } = useAuth();
	const [fetching, setFetching] = useState(true);
	function handleBack() {
		navigation.goBack();
	}
	useFocusEffect(() => {
		loadRepo().then(() => setFetching(false));
	});
	return (
		<Container>
			<HeaderBar>
				<OpacityButton onPress={handleBack}>
					<Feather name="arrow-left" size={24} color="#ffffff" />
				</OpacityButton>
				<HeaderText>
					{!fetching ? (
						`${repos.length} repositórios`
					) : (
						<ShimmerText />
					)}
				</HeaderText>
			</HeaderBar>
			<ScrollView>
				{fetching && (
					<>
						<RepoItemShimmer />
						<RepoItemShimmer />
						<RepoItemShimmer />
					</>
				)}
				{!fetching &&
					repos.map((repo) => <RepoItem key={repo.id} repo={repo} />)}
			</ScrollView>
		</Container>
	);
};
export default repos;
