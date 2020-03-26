import React, { useState } from 'react';
import MusicList from './MusicList';
import FilesExtract from './FilesExtract';
import WelcomeMusicPage from './WelcomeMusicPage';
import * as musicMetadata from 'music-metadata-browser';

export default function Content() {
  const [albums, setAlbums] = useState([]);

  const previewFile = async (event) => {
    let metaData = [];
    await Promise.all(
      [...event.target.files].map(file => {
        return musicMetadata.parseBlob(file).then(metadata => { metaData.push({ track: file, metadata: metadata }) })
      })
    )
    const albums = {}
    metaData.forEach(meta => {
      const albumName = meta.metadata.common.album
      console.log(meta);
      const track = {
        file: URL.createObjectURL(meta.track),
        file_name: meta.track.name,
        number: meta.metadata.common.track.no,
        artist: meta.metadata.common.artist
      }
      if (albums[albumName]) {
        albums[albumName].tracks.push(track)
      } else {
        albums[albumName] = { name: albumName, tracks: [track] }
      }
    })
    setAlbums(Object.values(albums))
  }

  return (
    <>
      <WelcomeMusicPage />
      <FilesExtract className="center-items" previewFile={previewFile} />
      <MusicList className="center-items" albums={albums} />
    </>
  )
}
