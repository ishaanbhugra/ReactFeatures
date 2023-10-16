import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DataFetchingComponent from './Components/DataFetchingComponent';
import Axios from './Components/Axios';
import DatePicker from './Components/DatePicker';
import TextToSpeech from './Components/TextToSpeech';
import Counter from './Components/Counter';
import Table from './Components/ReactDataTable/Table';

function App() {
  return (
    <>
    {/* <Home /> */}

    <BrowserRouter>
    <Routes>
      <Route path='/ReactFeatures' element={<Home/>} />
      <Route path='/dataFetchingComponent' element={<DataFetchingComponent/>} />
      <Route path='/axios' element={<Axios/>} />
      <Route path='/datePicker' element={<DatePicker />} />
      <Route path='/textToSpeech' element={<TextToSpeech />} />
      <Route path='/counter' element={<Counter />} />
      <Route path='/table' element={<Table />} />

    </Routes>
    </BrowserRouter>

    <footer style={{textAlign:"center", position: "fixed",left: "0",bottom: "15px", width: "100%"}}>Copyright @IshaanBhugra2023</footer>
    </>
  );
}

export default App;
