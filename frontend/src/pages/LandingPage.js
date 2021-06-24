import { Login } from '../components/Login';
import { Register } from '../components/Register';

export const LandingPage = () => {
	return (
		<div className="grid grid-cols-2 grid-rows-1">
			<div className="">
				<Login />
			</div>
			<div className="">
				<Register />
			</div>
		</div>
	);
};
