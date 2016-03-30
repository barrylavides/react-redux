import React from 'react';

export default React.createClass({
  getPair: function() {
    return ['Trainspotting', '28 Days Later', 'BvS'];
  },

  render: function() {
    return <div className="voting">
        {this.getPair().map(entry =>
          <button key={entry}>
            <h1>{entry}</h1>
          </button>
        )}
      </div>
  }
});