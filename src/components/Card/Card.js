import React from 'react';
import './Card.css';

const Card = ({ ticket, user }) => {
  return (
    <div className="card">
      <div className="card-id">{ticket.id}</div>
      <div className="card-title">{ticket.title}</div>
      <div className="card-tag">{ticket.tag.join(', ')}</div>
      <div className="card-user">{user ? user.name : 'Unassigned'}</div>
    </div>
  );
};

export default Card;