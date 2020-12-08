import { useState, useEffect } from 'react';
import ReactGA from 'react-ga';
import { LineChart, DataTextArea } from './components'
import leaderBoardJsonTransformer from './utils/LeaderBoardJsonTransformer'
import './App.css';

const App = () => {
  const [linearChartData, setLinearChartData] = useState({})

  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_ID);
    ReactGA.pageview(window.location.pathname);
  })

  const handleData = (parameter) => {
    setLinearChartData(leaderBoardJsonTransformer(parameter))
  }

  return (
    <div className="App">
      <div className="container">
        <div className="row github-btn-row">
          <div className="offset-1 col-10">
            <a href="https://github.com/MarioPerezEsteso/advent-of-code-charts" className="btn btn-primary">View this project on GitHub</a>
          </div>
        </div>
        <div className='row'>
          <div className='offset-1 col-10'>
            <DataTextArea dataHandler={handleData} />
          </div>
        </div>
        <div className="row">
          <div className='col'>
            <div className='chart'>
              <LineChart data={linearChartData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
