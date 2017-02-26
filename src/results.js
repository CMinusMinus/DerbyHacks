import React from 'react';
import ReactDOM from 'react-dom';
import {Paper, List, ListItem, Subheader} from 'material-ui';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';
import splitSong from './utils/split-song';

export default class Results extends React.Component {
  render() {
    console.log("props",this.props.results);
    return (
      <List>
        {this.props.results
          ? <div><Subheader>Here's what we found:</Subheader>
          this.props.results.map(item => (
            <a key={item.name} href={item.link} target="_blank" style={{ linkStyle: 'none' }}>
              <ListItem primaryText={item.splitSong[1]} /><Divider/>
            </a>
          ))
          </div>
          : null
        }
      </List>
    );
  }
}
