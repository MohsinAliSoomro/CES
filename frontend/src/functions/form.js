import axios from 'axios';

export const CreateFrom = (form) => {
	return axios.post(`${process.env.REACT_APP_API}/form/create`, form);
};
export const ListForm = () => {
	return axios.get(`${process.env.REACT_APP_API}/form/forms`);
};
