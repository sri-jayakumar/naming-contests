import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import ContestPreview from './ContestPreview';

const App = ({ initialContests }) => {
  return (
    <div className="App">
      <Header message="Naming Contests" />
      {
        initialContests.map((contest) => <ContestPreview key={contest.id} {...contest} />)
      }
    </div>
  );
};

App.propTypes = {
  initialContests: PropTypes.array
};

export default App;