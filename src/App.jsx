import './App.css';
import useFirebase from './components/FirebaseSetup';

function App() {
  const app = useFirebase();
  console.log(app);
  return (
    <>
      <h1>Learn Spanish</h1>
    </>
  );
}

export default App;
