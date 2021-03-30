import axios from 'axios';

export const CreateUser = (user) => {
	return axios.post(`${process.env.REACT_APP_API}/user/create`, user);
};
export const login = (user) => {
	return axios.post(`${process.env.REACT_APP_API}/user/login`,user);
};
export const listUser = () => {
	return axios.get(`${process.env.REACT_APP_API}/user/user`);
};
