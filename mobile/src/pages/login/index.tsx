import React, { useState } from "react";
import { TextInput, Text } from "react-native";
import { Container, Input, Button, TextError, InputField } from "./styles";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../contexts/user";
import { PrimaryTextButton } from "../../global-styles/buttons";

const SignIn: React.FC = () => {
  const [username, setUsername] = useState("");
  const [userNameError, setUserNameError] = useState(false);
  const { signIn } = useAuth();
  function handleLogin() {
    if (!userNameError) {
      signIn(username);
    }
  }
  return (
    <Container>
      <AntDesign
        name="github"
        size={96}
        color="#FFCE00"
        style={{ marginBottom: 50 }}
      />
      <InputField>
        <Input
          placeholder="Usuário"
          placeholderTextColor="#535353"
          selectionColor="#FFCE00"
          value={username}
          onChangeText={(e) => {
            setUserNameError(!e);
            setUsername(e);
          }}
        />
        {userNameError && <TextError>Campo orbigatório</TextError>}
      </InputField>
      <Button onPress={handleLogin}>
        <PrimaryTextButton>ENTRAR</PrimaryTextButton>
        <Ionicons name="md-arrow-forward" size={24} color="black" />
      </Button>
    </Container>
  );
};

export default SignIn;
