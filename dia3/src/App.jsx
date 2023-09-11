import './App.css'

function App() {
  let changed = flase;

  function handleClick() {
    if (changed === false) {
      document.body.style.backgroundcolor = "red";
      changed = true;
    } else {
      
    }
    
  }
  return (
    <>
    <button onClick={handleClick}>Click me</button>
    </>
  );
}

export default App
