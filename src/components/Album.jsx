import React from 'react';

const Album = (props) => {
  const tracks = () => {
    return props.album.tracks.map(track => {
      return (
        <tr key={track.name}>
          <td className="my-music-list_artiss">{track.artist}.</td>
          <td className="my-music-list_track-number">{track.number}.</td>
          <td className="my-music-list_track">{track.file_name}.</td>
          <td className="my-music-list_track"><audio src={track.file} controls /></td>
        </tr>

      )
    });
  }

  return (
    <>
      <tr>
        <td className="my-music-list_album">{props.album.name}</td>
        <td colSpan={4}>
          <table>
            <td>
              {tracks()}
            </td>
          </table>
        </td>
      </tr>
    </>
  )
}

export default Album;

