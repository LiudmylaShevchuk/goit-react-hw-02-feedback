import React, { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Container } from './App.styled';

export class App extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0,
  };

  render() {
    const options = Object.keys(this.state);
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions options={options} handleClick={this.handleClick} />
        </Section>
        <Section title="Statistics"></Section>
      </Container>
    );
  }
}

