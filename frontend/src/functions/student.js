import axios from 'axios';

export const CreateStudent = (dep) => {
	return axios.post(`${process.env.REACT_APP_API}/student/create`, dep);
};
export const ListStudent = () => {
	return axios.get(`${process.env.REACT_APP_API}/student/students`);
};

export const StudentProgram = (id) => {
	return axios.get(`${process.env.REACT_APP_API}/student/studentprogram/${id}`);
};