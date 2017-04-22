import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {
  FormsyCheckbox,
  FormsyDate,
  FormsyRadio,
  FormsyRadioGroup,
  FormsySelect,
  FormsyText,
  FormsyTime,
  FormsyToggle,
  FormsyAutoComplete
} from 'formsy-material-ui/lib';
const uuidV1 = require('uuid/v1');
import SongItem from './songItem';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

class MyForm extends Component {

  constructor() {
    super();
    this.submitForm = this
      .submitForm
      .bind(this);
    this.onRemoveSong = this.onRemoveSong.bind(this);
    this.state = {
      title: '',
      songs: [{
        id: uuidV1()
      }]
    }
  }

  submitForm(data) {
    alert(JSON.stringify(data, null, 4));
  }
  addSong() {
    this.setState({
      ...this.state,
      songs: this
        .state
        .songs
        .concat({ id: uuidV1()})
    })
  }

  onRemoveSong(id) {
    
    this.setState({
      ...this.state,
      songs: this.state.songs.filter((s) => s.id != id)
    });
  }

  render() {
    return (
      <Formsy.Form
        onValid={this.enableButton}
        onInvalid={this.disableButton}
        onValidSubmit={this.submitForm}
        onInvalidSubmit={this.notifyFormError}>
        <div className="form-body">
          <FormsyText
            name="title"
            required
            hintText="שם הפלייליסט"
            floatingLabelText="שם הפלייליסט"/>
          <div className="songs-container">
            {
              this
              .state
              .songs
              .map((song, idx) => 
              <SongItem idx={idx} 
                song={song} 
                key={song.id}
                onRemove={ this.onRemoveSong }/> 
            )}
            <RaisedButton type="button" 
            onClick={() => this.addSong()}
            label="הוספת שיר" style={{ flex: 1 }}/>

          </div>

        </div>
        <div className="form-footer">
          <RaisedButton type="submit" label="Submit"/>

        </div>
      </Formsy.Form>
    )
  }
}

export default MyForm;