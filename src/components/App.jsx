import { Component } from 'react';
import { Box } from './Box';

import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onButtonClick = e => {
    this.setState(prevState => ({
      [e.target.name]: prevState[e.target.name] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, statValue) => {
      return acc + statValue;
    }, 0);
  };

  countPositiveFeedbackPercentage() {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  }

  render() {
    const statOptions = Object.keys(this.state);
    const total = this.countTotalFeedback();
    return (
      <Box width="50%" p="15px">
        <Section title="Please leave feedback">
          <FeedbackOptions
            statOptions={statOptions}
            onButtonClick={this.onButtonClick}
          />
        </Section>
        <Section title="Statistics">
          {total ? (
            <Statistics
              stats={this.state}
              statOptions={statOptions}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <p>No feedback given</p>
          )}
        </Section>
      </Box>
    );
  }
}
