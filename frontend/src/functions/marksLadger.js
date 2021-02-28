import axios from 'axios';

export const fromSearch = (form) => {
	return axios.post(`${process.env.REACT_APP_API}/form/formSearch`, form);
};
// export const ListForm = () => {
// 	return axios.get(`${process.env.REACT_APP_API}/form/forms`);
// };
