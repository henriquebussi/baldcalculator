import React, { useState } from 'react';
import './App.css';

function App() {
  const [telaPrinc, setTelaPrinc] = useState('0');
  const [tela1, setTela1] = useState('');

  const handleClick = (value) => {
    if (value === 'AC') {
      setTelaPrinc('0');
      setTela1('');
    } else if (value === '=') {
      try {
        const resultado = eval(tela1);
        setTelaPrinc(resultado.toString());
        setTela1(resultado.toString());
      } catch (error) {
        setTelaPrinc('Erro');
        setTela1('');
      }
    } else {
      if (telaPrinc === '0') {
        setTelaPrinc(value);
      } else {
        setTelaPrinc(telaPrinc + value);
      }
      setTela1(tela1 + value);
    }
  };

  return (
    <body>
      <div className="calculatebody">
        <div id="tela1">{tela1}</div>
        <div id='telaprinc_pai'>
          <div id="telaprinc">{telaPrinc}</div>
        </div>
        <div className="corpocalculadora">
          <ul>
            <button onClick={() => handleClick('AC')} className='calculate'>AC</button>
            <button onClick={() => handleClick('1')} className='calculate'>1</button>
            <button onClick={() => handleClick('2')} className='calculate'>2</button>
            <button onClick={() => handleClick('3')} className='calculate'>3</button>
          </ul>
          <ul>
            <button onClick={() => handleClick('4')} className='calculate'>4</button>
            <button onClick={() => handleClick('5')} className='calculate'>5</button>
            <button onClick={() => handleClick('6')} className='calculate'>6</button>
            <button onClick={() => handleClick('7')} className='calculate'>7</button>
          </ul>
          <ul>
            <button onClick={() => handleClick('8')} className='calculate'>8</button>
            <button onClick={() => handleClick('9')} className='calculate'>9</button>
            <button onClick={() => handleClick('0')} className='calculate'>0</button>
            <button onClick={() => handleClick('+')} className='calculate'>+</button>
          </ul>
          <ul>
            <button onClick={() => handleClick('-')} className='calculate'>-</button>
            <button onClick={() => handleClick('/')} className='calculate'>/</button>
            <button onClick={() => handleClick('*')} className='calculate'>*</button>
            <button onClick={() => handleClick('=')} className='calculate'>=</button>
          </ul>
        </div>
      </div>
    </body>
  );
}

export default App;
