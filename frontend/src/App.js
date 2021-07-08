import './App.css';
import { useContext, useEffect } from 'react';
import { AuthContext } from './context/AuthContext';
import { Navbar } from './components/Navbar';
import { TemplateEditor } from './components/TemplateEditor';
import { TemplatePage } from './pages/TemplatesPage';
import { HomePage } from './pages/HomePage';
import { PageView } from './pages/PageView';
import { LandingPage } from './pages/LandingPage';
import { templates } from './templates/templates';
import { ProfilePage } from './pages/ProfilePage';
import { Footer } from './components/Footer';
import { PrivateRoute } from './PrivateRoute';
import { Route, Switch } from 'react-router-dom';
import { Statistics } from './pages/Statistics';
import axios from 'axios';

const visitPage = async () => {
	await axios.post('/api/visit', {});
};

function App() {
	const { currentUser, signOut } = useContext(AuthContext);

	useEffect(() => {
		visitPage();
	}, []);
	return (
		<div className="bg-gray-200">
			<Navbar />
			<Switch>
				<PrivateRoute path="/templates">
					<TemplatePage
						configs={templates}
						currentUserProp={currentUser}
						signOutFunc={signOut}
					/>
				</PrivateRoute>

				<PrivateRoute path="/statistics">
					<Statistics />
				</PrivateRoute>
				{/* <PrivateRoute path="/projects">
						<ProjectsPage/> 
					</PrivateRoute> */}
				<PrivateRoute path="/create/:id">
					<TemplateEditor
						configs={templates}
						currentUserProp={currentUser}
						signOutFunc={signOut}
					/>
				</PrivateRoute>
				<PrivateRoute path="/page/:id">
					<PageView
						currentUserProp={currentUser}
						signOutFunc={signOut}
					/>
				</PrivateRoute>
				<PrivateRoute path="/profilepage">
					<ProfilePage
						currentUserProp={currentUser}
						signOutFunc={signOut}
					/>
				</PrivateRoute>
				<Route path="/">
					{!currentUser ? (
						<LandingPage />
					) : (
						<HomePage
							currentUserProp={currentUser}
							signOutFunc={signOut}
						/>
					)}
				</Route>
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
