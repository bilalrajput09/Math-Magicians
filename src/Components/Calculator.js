import React from 'react';
import styles from './Calculator.module.css';

const Calculator = () => (
  <div className={styles.calculator_container}>
    <header>0</header>
    <main>
      <div className={styles.calculator_main}>
        <div>AC</div>
        <div>+/-</div>
        <div>%</div>
        <div style={{ background: 'orange' }}>/</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div style={{ background: 'orange' }}>X</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div style={{ background: 'orange' }}>-</div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div style={{ background: 'orange' }}>+</div>
      </div>
      <div className={styles.calculator_footer}>
        <div className={styles.footer_zero}>0</div>
        <div className={styles.footer_remaining}>.</div>
        <div
          className={styles.footer_remaining}
          style={{ background: 'orange' }}
        >
          =
        </div>
      </div>
    </main>
  </div>
);

export default Calculator;
