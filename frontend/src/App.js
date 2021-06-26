import './App.css';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { TemplateEditor } from './components/TemplateEditor';
import { TemplatePage } from './pages/TemplatesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { HomePage } from './pages/HomePage';
import { LandingPage } from './pages/LandingPage';
import { templates } from './templates/templates';
import { Footer } from './components/Footer';
import { PrivateRoute } from './PrivateRoute';

function App() {
	const { currentUser } = useContext(AuthContext);
	return (
		<div>
			<Navbar />
			<BrowserRouter>
				<Switch>
					<PrivateRoute path="/templates">
						<TemplatePage configs={templates} />
					</PrivateRoute>
					{/* <PrivateRoute path="/projects">
						<ProjectsPage/>
					</PrivateRoute> */}
					<PrivateRoute path="/create/:id">
						<TemplateEditor configs={templates} />
					</PrivateRoute>
					<Route path="/">
						{!currentUser ? <LandingPage /> : <HomePage />}
					</Route>
				</Switch>
			</BrowserRouter>
			<Footer />
		</div>
	);
}

export default App;
