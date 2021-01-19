import React from 'react';
import style from './gameOver.module.scss';

const GameOver = () => {
  return (
    <div className={style.gameOver}>
      <span className={style.gameOverGG}> Game Over</span>
    </div>
  );
};

export default GameOver;
