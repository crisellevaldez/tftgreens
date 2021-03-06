import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Header from './Header/header';
import Footer from './Footer/footer';
import Article from './Article/article';
import Section from './Section/section';
import Section2 from './Section-2/section-2';
import Cards from './Article/cards';

function App() {
  return (
    <div className="App">
      <Header />
      <Section2 />
      <Article />
      <Cards />
      <Section />
      <Footer />
    </div>
  );
}

export default App;


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();