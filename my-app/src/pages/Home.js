import React, { useState, useEffect } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import PlaylistOptionsModal from "../components/PlaylistOptionsModal";
import HomeIcon from "@mui/icons-material/Home";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import PersonIcon from "@mui/icons-material/Person";

function Home() {
  const [playlists, setPlaylists] = useState([]);
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/playlists")
      .then((response) => response.json())
      .then((data) => setPlaylists(data));
  }, []);

  const handleNewPlaylist = () => {
    const playlistName = prompt("Enter the name of the new playlist:");
    if (playlistName) {
      const newPlaylist = { name: playlistName, questions: [] };
      fetch("http://localhost:3000/playlists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPlaylist),
      })
        .then((response) => response.json())
        .then((createdPlaylist) => {
          setPlaylists([...playlists, createdPlaylist]);
        });
    }
  };

  const handleNavigateToPlaylist = (playlist) => {
    setSelectedPlaylist(playlist);
    setIsModalOpen(true);
  };

  const handleNavigate = () => {
    navigate("/playlist", { state: { playlist: selectedPlaylist } });
  };

  const handleEdit = (newName) => {
    const updatedPlaylist = { ...selectedPlaylist, name: newName };
    fetch(`http://localhost:3000/playlists/${selectedPlaylist._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedPlaylist),
    })
      .then((response) => response.json())
      .then((updatedPlaylist) => {
        setPlaylists(
          playlists.map((p) =>
            p._id === updatedPlaylist._id ? updatedPlaylist : p
          )
        );
      });
  };

  const handleDelete = () => {
    fetch(`http://localhost:3000/playlists/${selectedPlaylist._id}`, {
      method: "DELETE",
    }).then(() => {
      setPlaylists(playlists.filter((p) => p._id !== selectedPlaylist._id));
      setIsModalOpen(false);
    });
  };

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div className="home">
      <div className="home-container">
        <h1 className="welcome-message">Welcome!</h1>
        <div className="playlists">
          {playlists.map((playlist, index) => (
            <div
              key={index}
              className="playlist-box"
              onClick={() => handleNavigateToPlaylist(playlist)}
            >
              {playlist.name}
              <div
                className="color-circle"
                style={{ backgroundColor: getRandomColor() }}
              ></div>
            </div>
          ))}
        </div>
        <div className="navbar">
          <HomeIcon className="navbar-icon" onClick={() => navigate("/")} />
          <AddCircleOutlineIcon
            className="navbar-icon"
            onClick={handleNewPlaylist}
          />
          <PersonIcon className="navbar-icon" />
        </div>
      </div>

      <PlaylistOptionsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onNavigate={handleNavigate}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default Home;
