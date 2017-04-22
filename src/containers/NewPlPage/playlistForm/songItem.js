import React from 'react'
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
export default ({song, idx, onRemove}) => {
  return (
    <div>
    {idx + 1} -&nbsp;
      <FormsyText
                name={`songs[${idx}].title`}
                required
                hintText="Youtube URL"
                floatingLabelText="Youtube URL"/>
      <button type="button" onClick={ onRemove.bind(this, song.id)}></button>
    </div>

  )
}