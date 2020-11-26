import styled from 'styled-components/native';

export const Container = styled.View`
	background-color:#292929;
`;

export const TitleView = styled.View`
	flex-direction:row;
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
	font-size:24px;
	font-family:'Nunito_700Bold';
	text-transform: uppercase;
`;
export const DescriptionText = styled.Text`
	color:#ffffff;
	font-size:18px;
	font-family:'Nunito_300Light';
	margin:15px;
`;