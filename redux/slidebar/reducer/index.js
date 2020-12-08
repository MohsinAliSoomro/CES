import { SIDEBAR_HIDE, SIDEBAR_SHOW } from '../types';
const INITIAL_STATE = {
	isShow: false
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SIDEBAR_SHOW:
			return {
				...state,
				isShow: true
			};
		case SIDEBAR_HIDE:
			return {
				...state,
				isShow: false
			};

		default:
			return state;
	}
};
