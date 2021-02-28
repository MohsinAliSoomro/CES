import axios from 'axios';

export const CreateSubject = (sub) => {
	return axios.post(`${process.env.REACT_APP_API}/subject/create`, sub);
};
export const ListSubject = () => {
	return axios.get(`${process.env.REACT_APP_API}/subject/subjects`);
};
export const FindSubject = (id) => {
	return axios.get(`http://localhost:4000/subject/subject/semester/${id}`);
};
