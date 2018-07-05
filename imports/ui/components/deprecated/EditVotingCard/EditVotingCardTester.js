import React, { Component } from 'react';
import EditVotingCard from './EditVotingCard.js';

class EditVotingCardTester extends Component {
  constructor() {
    super();
    this.state = { isEditing: false, question: 'Wie wird das Wetter morgen?', answer: 210 };
    this.handleOnStartEdit = this.handleOnStartEdit.bind(this);
    this.handleOnSave = this.handleOnSave.bind(this);
  }
  handleOnStartEdit() {
    this.setState({ isEditing: !this.state.isEditing });
  }
  handleOnSave(id, { question, answer }) {
    this.setState({ question, answer, isEditing: false });
  }
  render() {
    return (
      <div>
        <EditVotingCard
          isEditing={this.state.isEditing}
          id="id"
          onStartEditing={this.handleOnStartEdit}
          saveEntry={this.handleOnSave}
          question={this.state.question}
          onRequestDelete={() => console.log('onRequestDelete')}
        />
      </div>
    );
  }
}

export default EditVotingCardTester;