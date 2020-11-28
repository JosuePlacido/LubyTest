import React, { useState } from "react";
import { Container, HeaderBar, HeaderText } from "./styles";
import { Feather } from "@expo/vector-icons";
import { OpacityButton } from "../../global-styles/buttons";
import { ScrollView } from "react-native-gesture-handler";
import UserItemCell, { UserItemShimmer } from "../user-item";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import Repo from "../../models/repo";
import { useAuth } from "../../contexts/user";
import ShimmerText from "../shimmer";
interface UserListProps {
	urlsufix: string;
	title: string;
}
const UserList: React.FC<UserListProps> = ({ urlsufix, title }) => {
	const navigation = useNavigation();
	const { loadFollowers, loadFollowing, following, followers } = useAuth();
	const [fetching, setFetching] = useState(true);
	function handleBack() {
		navigation.goBack();
	}
	useFocusEffect(() => {
		urlsufix === "followers"
			? loadFollowers().then(() => setFetching(false))
			: loadFollowing().then(() => setFetching(false));
	});
	return (
		<Container>
			<HeaderBar>
				<OpacityButton onPress={handleBack}>
					<Feather name="arrow-left" size={24} color="#ffffff" />
				</OpacityButton>
				<HeaderText>
					{!fetching ? (
						`${
							urlsufix === "followers"
								? followers.length
								: following.length
						} ${title}`
					) : (
						<ShimmerText />
					)}
				</HeaderText>
			</HeaderBar>
			<ScrollView>
				{fetching && (
					<>
						<UserItemShimmer />
						<UserItemShimmer />
						<UserItemShimmer />
						<UserItemShimmer />
						<UserItemShimmer />
					</>
				)}
				{!fetching && urlsufix === "followers"
					? followers.map((user) => (
							<UserItemCell
								key={user.login}
								user={user}
								typeList={title}
							/>
					  ))
					: following.map((user) => (
							<UserItemCell
								key={user.login}
								user={user}
								typeList={title}
							/>
					  ))}
			</ScrollView>
		</Container>
	);
};

export default UserList;
