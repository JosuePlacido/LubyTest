import React from "react";
import Repo from "../../models/repo";
import { Feather } from "@expo/vector-icons";
import ShimmerPlaceHolder from "react-native-shimmer-placeholder";
import {
	Container,
	DescriptionText,
	Footer,
	FooterItem,
	FooterText,
	Indicator,
	TitleText,
	TitleView,
} from "./styles";
import ShimmerText, { ShimmerIcon } from "../shimmer";
export interface InfoProps {
	repo: Repo;
}
const RepoItem: React.FC<InfoProps> = ({ repo, children }) => {
	return (
		<Container>
			<TitleView>
				<Indicator />
				<TitleText>{repo.name}</TitleText>
			</TitleView>
			{!!repo.description && (
				<DescriptionText>{repo.description}</DescriptionText>
			)}
			<Footer>
				<FooterItem>
					<Feather name="star" size={24} color="#FFCE00" />
					<FooterText>{repo.stargazers_count}</FooterText>
				</FooterItem>
				<FooterItem>
					<Feather
						name={repo.private ? "lock" : "unlock"}
						size={24}
						color={repo.private ? "#CC042A" : "#63BF1F"}
					/>
				</FooterItem>
			</Footer>
			{children}
		</Container>
	);
};

export const RepoItemShimmer: React.FC = () => {
	return (
		<Container>
			<TitleView>
				<Indicator />
				<ShimmerText />
			</TitleView>
			<DescriptionText>
				<ShimmerText />
			</DescriptionText>
			<Footer>
				<FooterItem>
					<Feather name="star" size={24} color="#FFCE00" />
					<ShimmerIcon />
				</FooterItem>
				<FooterItem>
					<ShimmerIcon />
				</FooterItem>
			</Footer>
		</Container>
	);
};
export default RepoItem;
