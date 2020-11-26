import styled from 'styled-components/native';
export const PrimaryButton = styled.TouchableOpacity`
	width:100%;
	padding:15px;
	flex-direction:row;
	border-radius:5px;
	justify-content:center;
	align-items:center;
	background-color:#FFCE00;
	margin-top:15px;
`;
export const PrimaryTextButton = styled.Text`
	color:black;
	font-family:'Nunito_700Bold';
	font-size:20px;
	margin-right:10px;
`;

export const OpacityButton = styled.TouchableOpacity`
	padding:15px;
	flex-direction:row;
	border-radius:5px;
	justify-content:center;
	align-items:center;
`;
export const OpacityButtonText = styled.Text`
	color:#ffffff;
	font-family:'Nunito_300Light';
	font-size:17px;
	margin-right:10px;
`;