import React from 'react';
import LogIn from './pages/LogIn';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Homepage from './pages/Homepage';
import Forgot from './pages/Forgot';
import Main from './pages/Main';

import Board from './pages/Board';

import List from './routes/List';
import Read from './routes/Read';
import Write from './routes/Write';

import Menu from './routes/Menu';
import More from './routes/More';

//-------
// import ListBoard from './routes/ListBoard';
// import HeaderBoard from './routes/HeaderBoard';
// import FooterBoard from './routes/FooterBoard';
// import CreateBoard from './routes/CreateBoard';
// import ReadBoard from './routes/ReadBoard';
//---------

import "./pages/LandingPage";
import LandingPage from "./pages/LandingPage";
import ChatRoom from "./routes/ChatRoom";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

const App = () => {
  {
  return (
    <Router>
      <Navbar />
        <Route path="/Log-in" exact component={LogIn} />
        <Route path="/Sign-up" exact component={SignUp} />
        <Route path="/Home" exact component={Home} />
        <Route path="/Forgot" exact component={Forgot} />
        <Route path="/Main" exact component={Main} />
        <Route path="/Board" exact component={Board} />

        <Route path="/Landing" exact component={LandingPage} />
        <Route path="/Chatroom" exact component={ChatRoom} /> 

        <Route path="/Menu" exact component={Menu} />
        <Route path="/More" exact component={More} />
        {/* <Route path="/Pagenation" exact component={Pagenation} /> */}

        {/* <Route path = "/board" component = {ListBoard}></Route>
        <Route path = "/post/:post_id" exact component = {CreateBoard}></Route>
        <Route path = "/post" exact component = {ReadBoard}></Route> */}




      <div>
        <div className="route">
          <Route exact path="/List" component={List} />
          <Route path="/read/:id?" component={Read} />
          <Route path="/write" component={Write} />
          {/* <Route path="/user" component={Users} /> */}


          


        </div>
      </div>

            {/* <Leftbar /> */}

        <Route path="/" exact component={Homepage} />
        <Switch>
        <Route path='/' exact/>
        </Switch>

        <Sidebar />
    </Router>
  );
  }
}

export default App;
