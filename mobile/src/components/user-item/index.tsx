import React from "react";
import Repo from "../../models/repo";
import { Feather } from "@expo/vector-icons";
import {
	Container,
	Indicator,
	TitleText,
	TitleView,
	AvatarUser,
} from "./styles";
import { UserItem } from "../../models/user";
import { OpacityButton } from "../../global-styles/buttons";
import { useAuth } from "../../contexts/user";
import ShimmerText from "../shimmer";
export interface InfoProps {
	user: UserItem;
	typeList: string;
}
const UserItemCell: React.FC<InfoProps> = ({ user, typeList, children }) => {
	const { visitUser } = useAuth();
	return (
		<Container>
			<TitleView>
				<Indicator />
				<AvatarUser source={{ uri: user.avatar_url }} />
				<TitleText>{user.login}</TitleText>
				<OpacityButton onPress={() => visitUser(user.login, typeList)}>
					<Feather name="arrow-right" size={24} color="#ffffff" />
				</OpacityButton>
			</TitleView>
			{children}
		</Container>
	);
};
export const UserItemShimmer: React.FC = () => {
	const { visitUser } = useAuth();
	return (
		<Container>
			<TitleView>
				<Indicator />
				<AvatarUser source={{ uri: null }} />
				<ShimmerText />
			</TitleView>
		</Container>
	);
};
export default UserItemCell;
