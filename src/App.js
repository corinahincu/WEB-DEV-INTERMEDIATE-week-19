
import './App.css';

function App() {
  const title = 'Welcome to the new blog'
  const likes = 50
  /* const person = {name: 'yoshi', age : 30} */
  const link = "http://www.google.com"
  return (
    <div className="App">
      <div className="content">
        {/* <h1>App Component </h1> */}
        <h1> {title} </h1>
        <p> Liked {likes} times </p>

        {/* <p>{person}</p> */}
        {/* we have and error  */}

        <p>{10}</p>
        <p>{"hello ninjas"}</p>
        <p>{[1, 2, 3, 4]}</p> {/* outputs it as a string altogether */}
        <p>{Math.random()*10}</p> {/* also outputs as a string */}

        <a href={link}>Google Site</a>
      </div>
    </div>
  );
}

export default App;

// we can output numbers, strings, arrays --> IS OKAY
// BUT WE CAN'T OUTPUT BOOLEANS AND OBJECTS , WE HAVE AN ERROR IF WE TRY!
