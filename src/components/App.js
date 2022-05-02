import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import ContestPreview from './ContestPreview'; 

const App = () => {
  const [contests, setContests] = useState([]);
  useEffect(() => {
    console.log('fetching');
    fetch('/api/contests')
      .then(resp => resp.json())
      .then(data => setContests(data.contests))
      .catch(err => console.error(err));
  }, [])
  return (
    <div className="App">
      <Header message="Naming Contests" />
      {
        contests.map((contest) => <ContestPreview key={contest.id} {...contest} />)
      }
    </div>
  );
};

App.propTypes = {
  data: PropTypes.object
};

export default App;