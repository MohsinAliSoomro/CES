import axios from 'axios';

export const CreateDepartment = (dep) => {
	return axios.post(`${process.env.REACT_APP_API}/department/create`, dep);
};
export const ListDepartment = () => {
	return axios.get(`${process.env.REACT_APP_API}/department/list`);
};
