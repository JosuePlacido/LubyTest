export interface User {
	login:string;
	name:string;
	location:string;
	email:string;
	company:string;
	bio:string;
	avatar_url:string;
	followers_url:string;
	following_url:string;
	organizations_url:string;
	starred_url:string;
	public_repos:number;
	public_gists:number;
	followers:number;
	following:number;
}
export interface UserItem{
	login:string;
	avatar_url:string;
}