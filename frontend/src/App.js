import './App.css';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { TemplateEditor } from './components/TemplateEditor';
import { TemplatePage } from './pages/TemplatesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { HomePage } from './pages/HomePage';
import { PageView } from './pages/PageView';
import { LandingPage } from './pages/LandingPage';
import { templates } from './templates/templates';
import { ProfilePage } from './pages/ProfilePage';
import { Footer } from './components/Footer';
import { PrivateRoute } from './PrivateRoute';

function App() {
	const { currentUser, signOut } = useContext(AuthContext);
	return (
		<div className="bg-gray-200">
			<Navbar currentUserProp={currentUser}/>
			<BrowserRouter>
				<Switch>

				
					<PrivateRoute path="/templates">
						<TemplatePage configs={templates} currentUserProp={currentUser} signOutFunc={signOut} />
					</PrivateRoute>
					{/* <PrivateRoute path="/projects">
						<ProjectsPage/>
					</PrivateRoute> */}
					<PrivateRoute path="/create/:id">
						<TemplateEditor configs={templates} currentUserProp={currentUser} signOutFunc={signOut} />
					</PrivateRoute>
					<PrivateRoute path="/page/:id">
						<PageView currentUserProp={currentUser} signOutFunc={signOut}/>
					</PrivateRoute>
					<PrivateRoute path="/profilepage">
						<ProfilePage currentUserProp={currentUser} signOutFunc={signOut}/>
					</PrivateRoute>
					<Route path="/">
						{ !currentUser ? ( <LandingPage />): <HomePage currentUserProp={currentUser} signOutFunc={signOut}/> }
					</Route>
				</Switch>
			</BrowserRouter>
			<Footer />
		</div>
	);
}

export default App;
