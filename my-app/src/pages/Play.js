import React, {useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Card from "../Card.js";
import "./Play.css";

function Play() {
  const location = useLocation();
  const navigate = useNavigate();
  const [playlist, setPlaylist]  = useState(location.state.playlist);
  console.log(playlist);
  const [questions] = useState(playlist.questions);
  console.log(questions);
  

  const handleBackClick = () => {
    navigate('/playlist', { state: { playlist } });
  };

  return (
    <div className="play">
      <button className="back-button" onClick={handleBackClick}>
        Back to Playlists
      </button>
      <div className="play_cards">
        {questions.map((q, index) => (
          <Card key={index} question={q.question} answer={q.answer} />
        ))}
      </div>
    </div>
  );
}

export default Play;
