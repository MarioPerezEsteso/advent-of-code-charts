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
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-3'>
            <DataTextArea dataHandler={handleData} />
          </div>
          <div className='col-9'>
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
