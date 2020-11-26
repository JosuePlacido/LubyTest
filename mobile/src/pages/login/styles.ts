import styled from 'styled-components/native';
import { PrimaryButton } from '../../global-styles/buttons';
export const Container = styled.View`
	justify-content:center;
	align-items:center;
	flex: 1;
	padding: 20px;
	background-color:#292929;
`;
export const Button = styled(PrimaryButton)`
	width:100%;
	padding:15px;
	flex-direction:row;
	border-radius:5px;
	justify-content:center;
	align-items:center;
	background-color:#FFCE00;
	margin-top:15px;
`;
export const Input = styled.TextInput`
	background-color:white;
	flex-direction:row;
	font-family:'Nunito_400Regular';
	font-size:20px;
	flex:1;
`;
export const InputField = styled.View`
	background-color:white;
	width:100%;
	border-radius:5px;
	border-color:#E5E5E5;
	padding:15px;
	flex-direction:row;
	justify-content:space-between;
	align-items:center;

`;
export const TextError = styled.Text`
	color:#EB2D2D;
	font-family:'Nunito_400Regular';
	font-size:14px;
`;