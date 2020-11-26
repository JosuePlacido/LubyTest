import styled from 'styled-components/native';
import { Avatar } from "../../global-styles/Images";

export const Container = styled.View`
	flex:1;
	background-color:#292929;
`;

export const Header = styled.View`
	background-color:#1F1F1F;
	padding-top:20px;
	justify-content:center;
	align-items:center;
	margin-bottom:60px;
`;
export const HeaderBar = styled.View`
	width:100%;
	flex-direction:row;
	justify-content:space-between;
	align-items:center;
`;
export const HeaderText = styled.Text`
	font-family:'Nunito_700Bold';
	font-size:17px;
	color:#FFFFFF;
	margin-left:10px;
`;
export const AvatarHeader = styled(Avatar)`
	margin-bottom:-55px;
`;
export const DisplayStats = styled.View`
	background-color:#5252525D;
	padding:15px;
	flex-direction:row;
	justify-content:space-around;
	margin:20px 0;
`;
export const StatsCell = styled.View`
	justify-content:center;
	align-items:center;
	flex:1;
`;
export const StatsNumberText = styled.Text`
	font-family:'Nunito_700Bold';
	font-size:40px;
	color:#FFFFFF;
`;
export const StatsTitleText = styled.Text`
	font-size:17px;
	font-family:'Nunito_300Light';
	color:#FFFFFF;
`;