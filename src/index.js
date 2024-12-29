import React from 'react';
import ReactDOM from 'react-dom/client';
import "./components/index.css";
import Header from './components/header';
import Meme from './components/form';
import Practice from './components/practice';
import UseStatePractice from './components/useStatePractice';
import UseEffectsPractice from './components/useEffectsPractice';
import S_E from './components/State&EffectPractice';
import Challenges from './components/challenges';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Meme />
    <UseStatePractice />
    <UseEffectsPractice />
    <S_E />
    <Practice />
    <Challenges darkMode={true}/>
  </React.StrictMode>
);
