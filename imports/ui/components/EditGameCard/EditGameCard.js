import React from 'react';
import PropTypes from 'prop-types';

import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import Chip from 'material-ui/Chip';
import SortHandleIcon from 'material-ui/svg-icons/navigation/menu';
import DeleteIcon from 'material-ui/svg-icons/navigation/close';

import {
  blueGrey100,
  blueGrey600,
  blueGrey800,
  blueA200,
  blueA400,
  orange500,
  redA200,
} from 'material-ui/styles/colors';

import EditFields from './EditFields';

const propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.number.isRequired,
  isEditing: PropTypes.bool.isRequired,
  saveEntry: PropTypes.func.isRequired,
  onStartEditing: PropTypes.func.isRequired,
  onRequestDelete: PropTypes.func.isRequired,
};

const EditGameCard = ({
  isEditing,
  question,
  answer,
  saveEntry,
  onStartEditing,
  onRequestDelete,
}) => (
  <div>
    <Paper style={{ ...paperStyle, backgroundColor: isEditing ? blueA400 : blueGrey600 }}>
      <form onSubmit={onSubmitFactory(saveEntry)}>
        <div style={cardStyle}>
          <div style={questionWrapperStyle}>
            <div style={{ ...handleIconWrapperStyle, cursor: isEditing ? 'initial' : 'ns-resize' }}>
              <SortHandleIcon color={isEditing ? blueA200 : blueGrey100} />
            </div>
            <Chip style={chipStyles} backgroundColor={blueGrey800}>Frage</Chip>
            <span>{question}</span>
          </div>
          <div>
            {
              isEditing
                ? <RaisedButton
                  label="Save"
                  type="submit"
                  style={{ margin: 5 }}
                  backgroundColor={orange500}
                />
                : <RaisedButton
                  label="Edit"
                  // setTimeout because form is otherwise directly submitted onClick (bug)
                  onClick={() => setTimeout(onStartEditing, 0)}
                  style={{ margin: 5 }}
                  backgroundColor={blueGrey800}
                />
            }
          </div>
        </div>
        {isEditing && <EditFields question={question} answer={answer} />}
      </form>
      {isEditing && <DeleteIcon style={deleteIconStyle} onClick={onRequestDelete} />}
    </Paper>
  </div>
);

EditGameCard.propTypes = propTypes;

const onSubmitFactory = saveEntry => (e) => {
  e.preventDefault();
  const question = e.target.question.value;
  const answer = +e.target.answer.value;
  saveEntry({ question, answer });
};


const paperStyle = {
  position: 'relative',
  marginTop: 10,
  userSelect: 'none',
  cursor: 'default',
};

const cardStyle = {
  padding: 10,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const handleIconWrapperStyle = {
  width: 24,
  height: 24,
  marginLeft: -5,
};

const questionWrapperStyle = {
  margin: 5,
  display: 'flex',
  alignItems: 'center',
};

const deleteIconStyle = {
  position: 'absolute',
  top: 0,
  right: 0,
  transform: 'translate(50%, -50%)',
  borderRadius: '50%',
  backgroundColor: redA200,
  cursor: 'pointer',
};

const chipStyles = {
  marginRight: 20,
  marginLeft: 10,
};

export default EditGameCard;
