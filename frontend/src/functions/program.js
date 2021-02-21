import axios from 'axios';

export const CreateProgram = (dep) => {
	return axios.post(`${process.env.REACT_APP_API}/program/create`, dep);
};
export const ListProgram = () => {
	return axios.get(`${process.env.REACT_APP_API}/program/programs`);
};
