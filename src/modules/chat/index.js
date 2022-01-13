import {createSearch} from "./components/search/Search";
import {createUsersList} from "./components/usersList/UsersList";
import {createProfile} from "./components/profile/Profile";
import {createMessagesList} from "./components/messagesList/MessagesList";
import {createMessageForm} from "./components/messageForm/MessageForm";

export const Search = createSearch();
export const UsersList = createUsersList();
export const Profile = createProfile();
export const MessagesList = createMessagesList();
export const MessageForm = createMessageForm();