import React from "react";
import { View } from "react-native";
import UserList from "../../components/userList";
import UserView from "../home";

import { useAuth } from "../../contexts/user";

const FollowingPage: React.FC = () => {
  const { followingViewing, followingView } = useAuth();
  return followingViewing ? (
    <UserView user={followingView} />
  ) : (
    <UserList title="seguindo" urlsufix="following" />
  );
};

export default FollowingPage;
