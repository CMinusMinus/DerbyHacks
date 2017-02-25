import React from 'react';
import ReactDOM from 'react-dom';
import {Paper, List, ListItem, Subheader} from 'material-ui';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';

export default class Results extends React.Component {
  handleChange() {
    this.props.onUserInput(
      this.refs.filterTextInput.value
    );
  }

  render() {
    const paper = {
      height: '25%',
      width: '60%',
      marginLeft: '20%',
      marginRight: '20%',
      textAlign: 'center',
      display: 'inline-block',
    };

    return (
      <List>
        <Subheader>Here's what we found:</Subheader>
        <ListItem primaryText="Song 1" /><Divider/>
        <ListItem primaryText="Song 2" /><Divider/>
        <ListItem primaryText="Song 3" /><Divider/>
        <ListItem primaryText="Song 4" /><Divider/>
        <ListItem primaryText="Song 5" />
      </List>
    );
  }
}
