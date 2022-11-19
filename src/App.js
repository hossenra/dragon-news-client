import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes/Routes';
import { Toaster } from 'react-hot-toast';
import MyLocation from './components/MyLocation';
import Direction from './components/Direction';
import { useState } from 'react';

function App() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');

  const displayDirection = (event) => {
    event.preventDefault();
    const start = event.target.origin.value;
    const end = event.target.destination.value;
    setOrigin(start);
    setDestination(end);

    console.log(start, end);
  }
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
      <Toaster></Toaster>
      {/* <MyLocation></MyLocation> */}
      <form onSubmit={displayDirection}>
        <input type="text" name='origin' required/>
        <br />
        <input type="text" name='destination' required />
        <br />
        <input type="submit" value="Show Direction" />
      </form>
      <Direction origin={origin} destination={destination}></Direction>
    </div>
  );
}

export default App;
