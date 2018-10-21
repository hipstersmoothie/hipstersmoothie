import React, { Component } from 'react';
import GitHubCalendar from 'github-calendar';

export default class ContributionsGraph extends Component {
  componentDidMount() {
    GitHubCalendar('.calender', 'hipstersmoothie', {
      global_stats: false,
      summary_text: ' '
    });
  }

  render() {
    return (
      <div className="calender centered">
        <style jsx>{`
          .calender :global(.text-normal) {
            font-size: 18px;
          }
          .centered,
          .centered :global(.contrib-legend) {
            text-align: center !important;
            float: none;
            margin: auto;
            width: 100%;
          }
        `}</style>
      </div>
    );
  }
}
