import './App.css';
import FormPhoneBook from './components/FormPhoneBook';
import ListPhoneBook from './components/ListPhoneBook';
import {useState} from 'react';

function App() {
  const [formState, setFormState] = useState([]);

  function handleFormData(e) {
        setFormState([...formState, e])
  }

  return (
    <div className="App">
      <FormPhoneBook data={handleFormData}/>
      <ListPhoneBook data={formState}/>
    </div>
  );
}

export default App;
