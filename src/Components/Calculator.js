import React, { useState } from 'react';
import styles from './Calculator.module.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [currentState, setCurrentState] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const calculateHandler = (e) => {
    const updatedState = calculate(currentState, e.target.textContent);
    setCurrentState(updatedState);
  };

  return (
    <div className={styles.calculator_main_container}>
      <h1>Yeah do some math!</h1>
      <div className={styles.calculator_container}>
        <header className={styles.header}>
          <span>{currentState.total || currentState.next || 0}</span>
          <span className={styles.small}>
            {currentState.operation || ''}
            {currentState.next || ''}
          </span>
        </header>
        <main>
          <div className={styles.calculator_main}>
            <button type="button" onClick={calculateHandler}>
              AC
            </button>
            <button type="button" onClick={calculateHandler}>
              +/-
            </button>
            <button type="button" onClick={calculateHandler}>
              %
            </button>
            <button
              type="button"
              onClick={calculateHandler}
              style={{ background: 'orange' }}
            >
              ÷
            </button>
            <button type="button" onClick={calculateHandler}>
              7
            </button>
            <button type="button" onClick={calculateHandler}>
              8
            </button>
            <button type="button" onClick={calculateHandler}>
              9
            </button>
            <button
              type="button"
              onClick={calculateHandler}
              style={{ background: 'orange' }}
            >
              x
            </button>
            <button type="button" onClick={calculateHandler}>
              4
            </button>
            <button type="button" onClick={calculateHandler}>
              5
            </button>
            <button type="button" onClick={calculateHandler}>
              6
            </button>
            <button
              type="button"
              onClick={calculateHandler}
              style={{ background: 'orange' }}
            >
              -
            </button>
            <button type="button" onClick={calculateHandler}>
              1
            </button>
            <button type="button" onClick={calculateHandler}>
              2
            </button>
            <button type="button" onClick={calculateHandler}>
              3
            </button>
            <button
              type="button"
              onClick={calculateHandler}
              style={{ background: 'orange' }}
            >
              +
            </button>
          </div>
          <div className={styles.calculator_footer}>
            <button
              type="button"
              onClick={calculateHandler}
              className={styles.footer_zero}
            >
              0
            </button>
            <button
              type="button"
              onClick={calculateHandler}
              className={styles.footer_remaining}
            >
              .
            </button>
            <button
              type="button"
              onClick={calculateHandler}
              className={styles.footer_remaining}
              style={{ background: 'orange' }}
            >
              =
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Calculator;
