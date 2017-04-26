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
import { BtnIconClear } from '../../../components/iconButtons';
export default ({song, idx, onRemove, onChange}) => {
  return (
    <div className="songItemContainer">
      <FormsyText
                name={`songs[${idx}].title`}
                required
                fullWidth={true}
                onChange={ onChange }
                hintText="Youtube URL"
                floatingLabelText="Youtube URL"/>
      <BtnIconClear onClick={ onRemove} />
    </div>

  )
}