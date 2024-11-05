import React from 'react';
import Card from '../Card/Card';
import './Board.css';

const Board = ({ tickets, users, grouping, sorting }) => {
  const groupTickets = () => {
    switch (grouping) {
      case 'status':
        return tickets.reduce((acc, ticket) => {
          if (!acc[ticket.status]) acc[ticket.status] = [];
          acc[ticket.status].push(ticket);
          return acc;
        }, {});
      case 'user':
        return tickets.reduce((acc, ticket) => {
          const user = users.find(u => u.id === ticket.userId);
          const userName = user ? user.name : 'Unassigned';
          if (!acc[userName]) acc[userName] = [];
          acc[userName].push(ticket);
          return acc;
        }, {});
      case 'priority':
        const priorityNames = ['No priority', 'Low', 'Medium', 'High', 'Urgent'];
        return tickets.reduce((acc, ticket) => {
          const priorityName = priorityNames[ticket.priority];
          if (!acc[priorityName]) acc[priorityName] = [];
          acc[priorityName].push(ticket);
          return acc;
        }, {});
      default:
        return {};
    }
  };

  const sortTickets = (ticketArray) => {
    return [...ticketArray].sort((a, b) => {
      if (sorting === 'priority') {
        return b.priority - a.priority;
      } else {
        return a.title.localeCompare(b.title);
      }
    });
  };

  const groupedTickets = groupTickets();

  return (
    <div className="board">
      {Object.entries(groupedTickets).map(([groupName, groupTickets]) => (
        <div key={groupName} className="column">
          <h3>{groupName}</h3>
          {sortTickets(groupTickets).map(ticket => (
            <Card 
              key={ticket.id} 
              ticket={ticket} 
              user={users.find(u => u.id === ticket.userId)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;