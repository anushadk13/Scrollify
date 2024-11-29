import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MessageIcon from '@mui/icons-material/Message';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import './CardSidebar.css';

function CardSidebar({ onCommentsClick }) {
  return (
    <div className="cardSidebar">
      <div className="cardSidebar_button">
        <FavoriteIcon />
        <p>Like</p>
      </div>
      <div className="cardSidebar_button" onClick={onCommentsClick}>
        <MessageIcon />
        <p>Comment</p>
      </div>
      <div className="cardSidebar_button">
        <BookmarkIcon />
        <p>Save</p>
      </div>
    </div>
  );
}

export default CardSidebar;