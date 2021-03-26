import './index.scss';
import './App.scss';
import ApplicationForm from './ApplicationForm';
import  petr  from './assets/petr.png';

const App = () => {
  return (
    <div className="App">
      <div className="row">
        <ApplicationForm />
        <img src={petr} className="petr-img"/>
        
      </div>
    </div>
  );
}

export default App;
