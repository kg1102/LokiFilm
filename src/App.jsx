import { useState } from 'react';
import { Rating } from '@material-ui/lab';


import ImgCapa from './Images/capa.png';

import './style.css';

export function App() {
  const [seeTrailer, setSeeTrailer] = useState(false);
  // const [data, setData] = useState([]);
  return (
    <div className="App">
      <section className="container">
        <h3>ESTÁ DISPONÍVEL AGORA!</h3>
        <h1>LOKI</h1>
        <div className="wrapper">
          <img className="wrapper__image" src={ImgCapa} alt="Capa do Filme Loki" />
          <div className="details">
            <p className="description">
              Em "Loki" da Marvel Studios, o vilão mercurial Loki (Tom Hiddleston) retorna seu papel como Deus do Mal em uma
              nova série que ocorre após os eventos de "Vingadores: Endgame".
            </p>
            <div className="infos">
              <div className="timer">51min</div>
              <Rating name="size-large" defaultValue={4} size="large" />
              <p className="year">2021</p>
            </div>
          </div>
        </div>
        <div className="button">
          <button
            className="button__watch"
            onClick={() => window.open("https://www.disneyplus.com/")}
          >
            ASSISTIR AGORA
          </button>
          <button
            className="button__trailer"
            onClick={() => setSeeTrailer(!seeTrailer)}
          >
            TRAILER
          </button>
          <div className="popup_trailer">
            {seeTrailer ?
              <>
              <div className="modal">
                <span className="modal__close" onClick={() => setSeeTrailer(!seeTrailer)}>&times;</span>
                <div className="modal__video">
                  <video src="https://cdn.discordapp.com/attachments/863279538481266716/882711275631689738/Loki_Marvel_Studios_Trailer_Oficial_Dublado_Disney_720P_HD.mp4" controls autoPlay/>
                </div>
              </div>
              </>
              :
              null
            }
          </div>
        </div>
      </section>
    </div>
  );
}