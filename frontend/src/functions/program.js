import axios from 'axios';

export const CreateProgram = (dep) => {
	return axios.post(`${process.env.REACT_APP_API}/program/create`, dep);
};
export const UpdateProgram = (id,dep) => {
	return axios.put(`${process.env.REACT_APP_API}/program/programUpdate/${id}`, dep);
};
export const deleteProgram = (id) => {
	return axios.delete(`${process.env.REACT_APP_API}/program/programDelete/${id}`);
};
export const ListProgram = () => {
	return axios.get(`${process.env.REACT_APP_API}/program/programs`);
};
