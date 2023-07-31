import React from 'react';
import Header from './Components/HeaderComp/Header';
import Single from './pages/Single/Single';
import TopBar from './Components/TopBarComp/TopBar';
import Home from './pages/Home/Home';
import About from './Components/SideBarComp/SideBar'
import WritePost from './pages/Write/WritePost';
import { useContext } from 'react'
import { Context } from './Context/Context'
import Setting from './pages/Setting/Setting';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import { Route, Switch, } from 'react-router-dom';
import Documents from './Components/Documentation/Documents';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function App() {
  const {user} = useContext(Context);
  return (
    <>
      <TopBar></TopBar>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/About' component={About} />
        <Route path='/Register' component={user ? Home : Register} />  {/* condiotional Renedering  only if there is user */}
        <Route path='/Login' component={user ? Home : Login} />
        <Route path='/Settings' component={user ? Setting : Register} />
        <Route path='/Write' component={ user ? WritePost : Register} />
        <Route path='/Documentation' component={ Documents} />
        <Route path='/post/:postId' component={Single} />
      </Switch>
    </>

  );
}

export default App;
