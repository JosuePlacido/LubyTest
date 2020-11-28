import axios from 'axios';
import Repo from '../models/repo';
import { UserItem } from '../models/user';

const api = axios.create({
    baseURL:'https://api.github.com/users/'
});
export function getRepos(url:string):Promise<{data:Repo[]}>{
    return new Promise(resolve => {
        api.get(url).then((e) => {
            resolve({
                data:e.data
            });
        })
    });
}
export function getUsers(url:string):Promise<{data:UserItem[]}>{
    return new Promise(resolve => {
        api.get(url).then((e) => {
            resolve({
                data:e.data
            });
        })
    });
}
export default api;