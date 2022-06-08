import React from 'react'
import "./styles.css"
import VideoItem from '../VideoItem'


const videos = [
  {
    urlWebm: require("./videos/Reel (1).webm"),
    poster: require("./videos/posters/posterVer.jpg"),
    ubicacion: "Ver Club",
    tipo: "Club nocturno"
  },
  {
    urlWebm: require("./videos/Reel (5).webm"),
    poster: require("./videos/posters/posterVer.jpg"),
    ubicacion: "Ver Club",
    tipo: "Club nocturno"
  },
  {
    urlWebm: require("./videos/Reel (2).webm"),
    poster: require("./videos/posters/posterLeo.jpg"),
    ubicacion: "La Casa de Leo",
    tipo: "Restaurante"
  },
  {
    urlWebm: require("./videos/Reel (3).webm"),
    poster: require("./videos/posters/posterLeo.jpg"),
    ubicacion: "La Casa de Leo",
    tipo: "Restaurante"
  },
  {
    urlWebm: require("./videos/Reel (4).webm"),
    poster: require("./videos/posters/posterDickens.jpg"),
    ubicacion: "Dickens",
    tipo: "Club nocturno"
  },
  {
    urlWebm: require("./videos/Reel Hogueras.webm"),
    poster: require("./videos/posters/posterDickens.jpg"),
    ubicacion: "Dickens",
    tipo: "Club nocturno"
  },
  {
    urlWebm: require("./videos/Reel Parabarap.webm"),
    poster: require("./videos/posters/posterParabarap.jpg"),
    ubicacion: "Parabarap",
    tipo: "Club nocturno"
  }


]

const WorksVideos = () => {
  return (
    <div className='videos-container'>
      {videos.map(v => <VideoItem urlMp4={v.urlMp4} urlWebm={v.urlWebm} poster={v.poster} location={v.ubicacion} category={v.tipo} />)}
    </div>
  )
}

export default WorksVideos