import axios from 'axios';

export const CreateSubject = (sub) => {
	return axios.post(`${process.env.REACT_APP_API}/subject/create`, sub);
};
export const ListSubject = () => {
	return axios.get(`${process.env.REACT_APP_API}/subject/list`);
};
