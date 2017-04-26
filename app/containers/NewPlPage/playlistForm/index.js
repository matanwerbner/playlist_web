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
import YoutubeExtract from '../../../utils/youtubeExtract';
const uuidV1 = require('uuid/v1');
import SongItem from './songItem';
import {BtnIconAdd} from '../../../components/iconButtons';

class MyForm extends Component {

  constructor() {
    super();
    this.submitForm = this
      .submitForm
      .bind(this);
    this.onSongChange = this
      .onSongChange
      .bind(this);
    this.onRemoveSong = this
      .onRemoveSong
      .bind(this);
    this.state = {
      title: '',
      songs: [
        {
          id: uuidV1()
        }
      ]
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
        .concat({id: uuidV1()})
    })
  }

  onRemoveSong(id) {
    if (this.state.songs.length == 1) {
      return;
    }
    this.setState({
      ...this.state,
      songs: this
        .state
        .songs
        .filter((s) => s.id != id)
    });
  }

  onSongChange(id, e) {
    const extractedYoutubeId = YoutubeExtract(e.currentTarget.value);
    this.props.onLoadPreview(extractedYoutubeId);
    //
    // /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/.
    // exec('https://www.youtube.com/watch?v=MT30X9klyL8')[7]
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
            {this
              .state
              .songs
              .map((song, idx) => <SongItem
                idx={idx}
                song={song}
                onChange={this
                .onSongChange
                .bind(this, song.id)}
                key={song.id}
                onRemove={this
                .onRemoveSong
                .bind(this, song.id)}/>)}
            <div>
              <BtnIconAdd onClick={() => this.addSong()}/>
            </div>

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