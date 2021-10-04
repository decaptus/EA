import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

import * as FcIcons from "react-icons/fc";

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <FcIcons.FcExternal />,
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
    title: 'Support',
    path: '/support',
    icon: <FcIcons.FcAssistant />,
    cName: 'nav-text'
  }
];