
import { AiOutlineBars } from 'react-icons/ai';
import { hide, show } from '../../redux/slidebar/sidebar'
import { useDispatch,useSelector} from 'react-redux'
function index(props) {
	const isShow= useSelector((state)=>state.toggle.isShow)
	const dispatch = useDispatch();
	return (
		<div style={{ display: 'flex', justifyContent: 'space-between', boxShadow: '0px 0px 3px 2px grey' }}>
			{isShow ? (
				<button className="nav-btn" onClick={() => dispatch(hide())}>
					<AiOutlineBars size={30} />
				</button>
			) : (
				<button className="nav-btn" onClick={() => dispatch(show())}>
					<AiOutlineBars size={30} />
				</button>
			)}
			<p>Logo</p>
			<p>The Shaikh Ayaz University</p>
		</div>
	);
}

export default index
