/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */

import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage'; // Import your Home Page component
import CategoryPage from "./components/CategoryPage";
import ProfilePage from './components/ProfilePage';
import LeadBoardPage from './components/LeadBoardPage';
import ScoreHistoryPage from './components/ScoreHistoryPage';
import QuizPage from './components/QuizPage';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/category' element={<CategoryPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/leaderboard' element={<LeadBoardPage />} />
        <Route path='/score-history' element={<ScoreHistoryPage />} />
        <Route path='/quiz' element={<QuizPage />} />
      </Routes>
    </Router>
  );
};

export default App;
