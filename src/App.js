import './App.css';

import Stars from './componets/Stars/Stars';

function App() {
  return (
    <>
    <div className='container'>
      <div className='rating'>
      <Stars count={5}/>
      </div>
    </div>
    </>
  );
}

export default App;
