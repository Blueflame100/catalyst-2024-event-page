import './App.css';
import Header from './components/main_page/Header.jsx'
import FrontPage from './components/main_page/FrontPage.jsx'
import Register from './components/main_page/Register.jsx'
import About from './components/information/About.jsx'
import Expectations from './components/information/Expectations.jsx'
import Goals from './components/information/Goals.jsx'
import CurrentStudent from './components/information/CurrentStudent.jsx'
import Tracks from './components/information/Tracks.jsx'
import Schedule from './components/information/Schedule.jsx'
import FAQList from './components/faq/FAQList.jsx'
import AskQuestionForm from './components/faq/AskQuestion.jsx';


function App() {
  return (
    <div className="App bg-main-gradient">
      <Header />
      <FrontPage />
      <Register />
      <About />
      <Expectations />
      <Goals />
      <CurrentStudent />
      <Tracks />
      <Schedule />
      <FAQList />
      <AskQuestionForm />
    </div>
  );
}

export default App;
