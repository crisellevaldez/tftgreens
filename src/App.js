import logo from './logo.svg';
import './App.css';
import Header from './Header/header';
import Footer from './Footer/footer';
//Article-1
import Article from './components/article-1/article';
import Cards from './components/article-1/cards';


function App() {
  return (
    <div className="App">
      <Header />
      <Article />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
