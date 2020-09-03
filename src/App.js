import React from 'react';
import './App.css';
import './css/main.css';
import moment from "moment";
import 'moment/locale/ru';
import Calendar from './components/Calendar'
function App() {
  let currentDate = moment("1995-03-23", "YYYY-MM-DD");
  currentDate.locale('ru');

  return (
    <Calendar currentDate = {currentDate} />
  );
}

export default App;
