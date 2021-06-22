import { Login } from '../components/Login';
import { Register } from '../components/Register';

export const LandingPage = () => {
	return (
		<div className="d-flex justify-content-center border m-4 flex-wrap flex-md-nowrap">
			<Login />
			<div
				className="my-3"
				style={{
					width: '4px',
					backgroundColor: '#dee2e6',
				}}
			></div>
			<Register />
		</div>
	);
};
