import React from 'react';

export default function FilesExtract(props) {
  return (
    <div className="my-music-list_extract-files">
      <label htmlFor="audio_file">Choose audio files to upload</label>
      <input type="file" id="audio_file" name="audio_file" onChange={props.previewFile} multiple />
    </div >
  )
}