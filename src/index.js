import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./component/Header/Header";
import Banner from "./component/Banner/Banner";
import Advantages from "./component/Advantages/Advantages";
import Footer from "./component/Footer/Footer";
import 'normalize.css';

ReactDOM.render(
  <React.StrictMode>
<Header />
<Banner />
<Advantages />
<Footer />
  </React.StrictMode>,
  document.getElementById('root')
);


