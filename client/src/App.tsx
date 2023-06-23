import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ModalWindowQuiz from './components/UI/ModalWindowQuiz';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/:id" element={<ModalWindowQuiz />} />
    </Routes>
  );
}

export default App;
