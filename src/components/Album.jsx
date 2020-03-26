import React from 'react';
import './album.scss';

const Album = (props) => {
  const tracks = () => {
    return props.album.tracks.map(track => {
      return (
        <tr key={track.name}>
          <td className="my-music-list_artiss">{track.artist}.</td>
          <td className="my-music-list_track-number">{track.number}.</td>
          <td className="my-music-list_track"><audio src={track.file} controls /></td>
        </tr>

      )
    });
  }

  return (
    <>
      <tr>
        <td className="my-music-list_album">{props.album.name}</td>
        <td colSpan={3}>
          <table>
            <tbody>
              {tracks()}
            </tbody>
          </table>
        </td>
      </tr>
    </>
  )
}

export default Album;

