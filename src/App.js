
import Navbar from './navbar';
import Home from './Home';



function App() {
  return (
    <div className="App">
        <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;

// we can output numbers, strings, arrays --> IS OKAY
// BUT WE CAN'T OUTPUT BOOLEANS AND OBJECTS , WE HAVE AN ERROR IF WE TRY!
