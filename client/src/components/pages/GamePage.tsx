import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../features/reduxHooks';
import { themeThunk } from '../features/thunkActions/themeActionsThunk';
import ThemesUI from '../UI/ThemesUI';

export default function GamePage() {
  const dispatch = useAppDispatch();
  const themes = useAppSelector((state) => state.themes);

  useEffect(() => {
    dispatch(themeThunk());
  }, []);

  return (
    <div>
      <ThemesUI />
    </div>
  );
}
