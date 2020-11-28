import React, {
	createContext,
	useState,
	useEffect,
	useContext,
	useRef,
} from "react";
import { AsyncStorage } from "react-native";
import api, { getRepos, getUsers } from "../services/api";
import { User, UserItem } from "../models/user";
import Repo from "../models/repo";
export interface UserContextData {
	loading: boolean;
	signed: boolean;
	signIn(username: string): Promise<void>;
	signOut(): void;
	loadRepo(): Promise<void>;
	repos: Repo[];
	user: User | null;
	loadUsers(sufix: string): Promise<void>;
	userList: UserItem[];
	followerViewing: boolean;
	followerView: User | null;
	followingViewing: boolean;
	followingView: User | null;
	visitUser(username: string, type?: string): Promise<void>;
}
export const UserProvider: React.FC = ({ children }) => {
	const [user, setUser] = useState<User | null>(null);
	const [followerView, setFollowerView] = useState<User | null>(null);
	const [followingView, setFollowingView] = useState<User | null>(null);
	const [userList, setUserList] = useState<UserItem[]>([]);
	const [repos, setRepos] = useState<Repo[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function loadStoragedData() {
			const storagedUser = await AsyncStorage.getItem("@RNAuth:user");
			if (storagedUser) {
				await signIn(storagedUser);
			}
			setLoading(false);
		}
		loadStoragedData();
	}, []);
	async function signIn(username: string) {
		setLoading(true);
		const { data } = await api.get(username);
		setUser(data);
		setLoading(false);
		await AsyncStorage.setItem("@RNAuth:user", username);
	}
	async function signOut() {
		setUser(null);
		setFollowerView(null);
		setFollowingView(null);
		setUserList([]);
		setRepos([]);
		await AsyncStorage.clear();
	}
	async function loadRepo() {
		const { data } = await getRepos(`${user?.login}/repos`);
		setRepos([...data]);
	}
	async function visitUser(username: string, type: string) {
		if (!username) {
			type === "seguidores"
				? setFollowerView(null)
				: setFollowingView(null);
			return;
		}
		const { data } = await api.get(username);
		type === "seguidores" ? setFollowerView(data) : setFollowingView(data);
	}
	async function loadUsers(sufix: String) {
		const { data } = await getUsers(`${user?.login}/${sufix}`);
		setUserList([...data]);
	}
	return (
		<UserContext.Provider
			value={{
				loading,
				signed: !!user,
				signIn,
				signOut,
				user,
				loadRepo,
				repos,
				loadUsers,
				userList,
				followerViewing: !!followerView,
				followerView,
				followingViewing: !!followingView,
				followingView,
				visitUser,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

const UserContext = createContext<UserContextData>({} as UserContextData);
export function useAuth() {
	const context = useContext(UserContext);
	return context;
}
