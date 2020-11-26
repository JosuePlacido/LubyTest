export default interface Repo {
	id: number;
	name: string;
	private: boolean;
	description: string|undefined;
	stargazers_count: number;
}