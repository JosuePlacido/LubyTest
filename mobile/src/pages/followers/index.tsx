import React from "react";
import { View } from "react-native";
import UserList from "../../components/userList";
import UserView from "../home";

import { useAuth } from "../../contexts/user";

const FollowersPage: React.FC = () => {
  const { followerViewing, followerView } = useAuth();
  return followerViewing ? (
    <UserView user={followerView} />
  ) : (
    <UserList title="seguidores" urlsufix="followers" />
  );
};

export default FollowersPage;
