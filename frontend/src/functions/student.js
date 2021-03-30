import axios from 'axios';

export const CreateStudent = (dep) => {
	return axios.post(`${process.env.REACT_APP_API}/student/create`, dep);
};
export const DeleteStudent = (id) => {
	return axios.delete(`${process.env.REACT_APP_API}/student/student/${id}`);
};
export const ListStudent = () => {
	return axios.get(`${process.env.REACT_APP_API}/student/students`);
};
export const UpdateStudent = (id,std) => {
	return axios.put(`${process.env.REACT_APP_API}/student/student/${id}`,std);
};

export const StudentProgram = (id) => {
	return axios.get(`${process.env.REACT_APP_API}/student/studentprogram/${id}`);
};