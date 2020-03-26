import React from 'react';
import Album from './Album';
import './styles.scss';

const MusicList = (props) => {
  return (
    <>
      {props.albums.length ?
        <div>
          <table>
            <th>
              <tr>
                <th className="my-music-list_album">Album Name</th>
                <th className="my-music-list_artiss">Artist(s)</th>
                <th className="my-music-list_track-number">Track Number</th>
                <th className="my-music-list_track">Track</th>
              </tr>
            </th>
            <tbody>
              {props.albums.map(album => <Album key={album.name} album={album} />)}
            </tbody>
          </table>
        </div>
        : null
      }
    </>
  )
}

export default MusicList