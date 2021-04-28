import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import NearMeIcon from '@material-ui/icons/NearMe';
import NoteIcon from '@material-ui/icons/Note';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import { openSendMessage } from '../features/mailSlice';
import {
  selectInbox,
  selectEmailCount,
  toggleInboxSent,
} from '../features/sidebarSlice';

function Sidebar() {
  const dispatch = useDispatch();
  const inbox = useSelector(selectInbox);
  const emailCount = useSelector(selectEmailCount);

  return (
    <div className="sidebar">
      <Button
        className="sidebar__compose"
        startIcon={<AddIcon fontSize="large" />}
        onClick={() => dispatch(openSendMessage())}
      >
        Compose
      </Button>

      <SidebarOption
        Icon={InboxIcon}
        title="Inbox"
        number={emailCount}
        selected={inbox}
        onclick={() => !inbox && dispatch(toggleInboxSent())}
      />
      <SidebarOption
        Icon={NearMeIcon}
        title="Sent"
        number={emailCount}
        selected={!inbox}
        onclick={() => inbox && dispatch(toggleInboxSent())}
      />
      <SidebarOption Icon={StarIcon} title="Starred" number={0} />
      <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={0} />
      <SidebarOption Icon={LabelImportantIcon} title="Important" number={0} />
      <SidebarOption Icon={NoteIcon} title="Drafts" number={0} />
      <SidebarOption Icon={ExpandMoreIcon} title="More" number={0} />

      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <IconButton>
            <PersonIcon />
          </IconButton>

          <IconButton>
            <DuoIcon />
          </IconButton>

          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
