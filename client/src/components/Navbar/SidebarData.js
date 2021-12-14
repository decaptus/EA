import React from 'react';

import * as FcIcons from "react-icons/fc";

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <FcIcons.FcExternal />,
    cName: 'nav-text'
  },
  {
    title: 'Log In',
    path: '/login',
    icon: <FcIcons.FcManager />,
    cName: 'nav-text'
  },
  {
    title: 'Lessons',
    path: '/lessons',
    icon: <FcIcons.FcReading />,
    cName: 'nav-text'
  },
  {
    title: 'Forum',
    path: '/forum',
    icon: <FcIcons.FcQuestions />,
    cName: 'nav-text'
  },

  {
    title: 'Flats',
    path: '/flats',
    icon: <FcIcons.FcHome />,
    cName: 'nav-text'
  },
  
  {
    title: 'Support',
    path: '/support',
    icon: <FcIcons.FcAssistant />,
    cName: 'nav-text'
  }
];