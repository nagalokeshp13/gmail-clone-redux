/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import './SidebarOption.css';

function SidebarOption({ Icon, title, number, selected, onclick }) {
  return (
    <div
      className={`sidebarOption ${selected && 'sidebarOption--active'}`}
      onClick={onclick}
    >
      <Icon />
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  );
}

export default SidebarOption;
