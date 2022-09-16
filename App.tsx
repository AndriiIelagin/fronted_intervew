import * as React from 'react';
import './style.css';

export default function App() {
  const customDebounce = (cb, delay) => {
    let timer;

    return (...args) => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        cb(...args);
      }, delay);
    };
  };

  const handleChange = customDebounce((e) => {
    console.log(e.target.value);
  }, 1000);

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <input onChange={handleChange} />
    </div>
  );
}
