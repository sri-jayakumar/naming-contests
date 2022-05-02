import React from 'react';
import PropTypes from 'prop-types';

const ContestPreview = (contest) => {
  return (
    <div className="ContestPreview">
        <div className="ContestPreview-category">
          {contest.categoryName}
        </div>
        <div className="ContestPreview-name">
          {contest.contestName}
        </div>
    </div>
  );
}

ContestPreview.propTypes = {
  contest: PropTypes.object
};

export default ContestPreview;