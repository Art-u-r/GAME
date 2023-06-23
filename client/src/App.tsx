import { Button } from 'antd';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import GamePage from './components/pages/GamePage';

function App(): JSX.Element {
  return (
    <div>
      <GamePage />
    </div>
  );
}

export default App;
