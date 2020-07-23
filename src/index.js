import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./component/Header/Header";
import Banner from "./component/Banner/Banner";
import Advantages from "./component/Advantages/Advantages";
import 'normalize.css';

ReactDOM.render(
  <React.StrictMode>
<Header />
<Banner />
<Advantages />
  </React.StrictMode>,
  document.getElementById('root')
);


