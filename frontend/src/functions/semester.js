import axios from 'axios';

export const CreateSemester = (sem) => {
	return axios.post(`${process.env.REACT_APP_API}/semester/create`, sem);
};
export const ListSemester = () => {
	return axios.get(`${process.env.REACT_APP_API}/semester/list`);
};
