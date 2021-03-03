import axios from 'axios';

export const InsertMarks = (marks) => {
	return axios.post(`${process.env.REACT_APP_API}/marks/marks`, marks);
};
export const UpdateMarks = (sbId, stdId, data) => {
	return axios.post(`${process.env.REACT_APP_API}/marks/marks/${sbId}/${stdId}`, data);
};
