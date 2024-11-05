import React from 'react';
import './Header.css';

const Header = ({ grouping, sorting, onGroupingChange, onSortingChange }) => {
  return (
    <header className="app-header">
      <div className="display-dropdown">
        <select value={grouping} onChange={(e) => onGroupingChange(e.target.value)}>
          <option value="status">By Status</option>
          <option value="user">By User</option>
          <option value="priority">By Priority</option>
        </select>
        <select value={sorting} onChange={(e) => onSortingChange(e.target.value)}>
          <option value="priority">Sort by Priority</option>
          <option value="title">Sort by Title</option>
        </select>
      </div>
    </header>
  );
};

export default Header;