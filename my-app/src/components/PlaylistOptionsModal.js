import React, { useState } from 'react';
import './PlaylistOptionsModal.css';

function PlaylistOptionsModal({ isOpen, onClose, onNavigate, onEdit, onDelete }) {

  const handleEdit = () => {
    const newName = prompt('Enter new playlist name:', '');
    onEdit(newName);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Playlist Options</h2>
        <button onClick={onNavigate}>Go to playlist</button>
        <button onClick={handleEdit}>Edit playlist Name</button>
        <button onClick={onDelete}>Delete playlist</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default PlaylistOptionsModal;