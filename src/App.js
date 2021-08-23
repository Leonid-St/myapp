
import './App.css';
import React, { Profiler } from 'react';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route } from 'react-router-dom';

const App = (props) => {

  return (

    <BrowserRouter>

      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path="/dialogs" render={() =>
           <Dialogs dialogs={props.state.dialogsPage.dialogs}
            messages={props.state.dialogsPage.messages}
            />} />
          <Route path="/profile" render={() =>
           <Profile
            profilePage={props.state.profilePage}
           addPost={props.addPost}
           updateNewPostText={props.updateNewPostText}
           />} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />


        </div>


      </div>

    </BrowserRouter>

  )
}


export default App;
