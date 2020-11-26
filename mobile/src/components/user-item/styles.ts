import styled from 'styled-components/native';
import { Avatar } from "../../global-styles/Images";

export const Container = styled.View`
	background-color:#292929;
	border-color:#7070705A;
	border-bottom-width:1px;
	padding:20px 15px 10px 0;
`;

export const TitleView = styled.View`
	flex-direction:row;
	align-items:center;
	justify-content:space-between;
`;

export const Indicator = styled.View`
	width:10px;
	height:42px;
	background-color:#FFCE00;
	margin-right:10px;
	border-bottom-right-radius:10px;
	border-top-right-radius:10px;
`;
export const TitleText = styled.Text`
	color:#ffffff;
	font-size:20px;
	font-family:'Nunito_700Bold';
	flex:1;
`;
export const AvatarUser = styled(Avatar)`
	width:64px;
	height:64px;
	margin-right:20px;
`;