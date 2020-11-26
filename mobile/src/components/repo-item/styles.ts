import styled from 'styled-components/native';

export const Container = styled.View`
	background-color:#292929;
	border-color:#7070705A;
	border-bottom-width:1px;
	padding:20px 0 10px 0;
`;

export const TitleView = styled.View`
	flex-direction:row;
	align-items:center;
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
`;
export const DescriptionText = styled.Text`
	color:#ffffff;
	font-size:18px;
	font-family:'Nunito_300Light';
	margin:15px;
`;
export const Footer = styled.View`
	flex-direction:row;
	justify-content:space-between;
	padding:15px;
	flex:1;
	align-items:center;
`;
export const FooterItem = styled.View`
	flex-direction:row;
	align-items:center;
`;
export const FooterText = styled.Text`
	color:#ffffff;
	font-size:15px;
	font-family:'Nunito_300Light';
	margin:0 10px;
`;