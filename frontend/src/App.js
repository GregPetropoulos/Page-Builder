import './App.css';
import { useContext, useEffect } from 'react';
import { AuthContext } from './context/AuthContext';
import { BrowserRouter, Route, Switch,} from 'react-router-dom';
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
import { Statistics } from './pages/Statistics';
import axios from 'axios';

const visitPage = async () => {
  await axios.post('/api/visit', {});
};

function App() {
  const { currentUser, signOut } = useContext(AuthContext);

  console.log('CURRENT USER', currentUser);

  useEffect(() => {
    visitPage();
  }, []);

  return (
    <div className='gradient'>
      <BrowserRouter>
      <Navbar currentUserProp={currentUser} signOutFunc={signOut} />
      </BrowserRouter>
      
      <BrowserRouter>
        <Switch>
          <PrivateRoute path='/templates'>
            <TemplatePage
              configs={templates}
              currentUserProp={currentUser}
            />
          </PrivateRoute>
          <PrivateRoute path='/statistics'>
            <Statistics />
          </PrivateRoute>
          <PrivateRoute path='/create/:id'>
            <TemplateEditor
              configs={templates}
              currentUserProp={currentUser}
            />
          </PrivateRoute>
          <PrivateRoute path='/page/:id'>
            <PageView currentUserProp={currentUser}/>
          </PrivateRoute>
          <PrivateRoute path='/profilepage'>
            <ProfilePage currentUserProp={currentUser} signOutFunc={signOut}/>
          </PrivateRoute>
          <Route path='/'>
            {currentUser && currentUser.id ? (
              <HomePage currentUserProp={currentUser} />
            ) : (
              <LandingPage />
            )}
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
