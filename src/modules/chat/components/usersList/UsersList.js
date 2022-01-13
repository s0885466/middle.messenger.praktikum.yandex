import {createUserItem} from "./userItem/UserItem";

export const createUsersList = () => [...Array(20).keys()]
    .map(el => createUserItem())
    .join('');