import './component/style/App.css';
import Contacts from './component/contact/Contacts';
import Navbar from './component/navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddContact from './component/contact/AddContact';
import EditContact from './component/contact/EditContact';
import NotFound from './component/contact/NotFound';
import store from './store';
import { Provider } from 'react-redux';

function App() {
  return (
  <Provider store={store}>
   <Router>
      <div className="App">
      <Navbar />
      <div className="container">
        <div className="py-3">
          <Switch>
            <Route exact path="/" component={Contacts} />
            <Route exact path="/Contacts/add" component={AddContact} />
            <Route exact path="/Contacts/edit/:id" component={EditContact} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </div>
   </Router>
   </Provider>
  );
}

export default App;
