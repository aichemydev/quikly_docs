
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Quikly_docs/__docusaurus/debug',
    component: ComponentCreator('/Quikly_docs/__docusaurus/debug','cb8'),
    exact: true
  },
  {
    path: '/Quikly_docs/__docusaurus/debug/config',
    component: ComponentCreator('/Quikly_docs/__docusaurus/debug/config','f17'),
    exact: true
  },
  {
    path: '/Quikly_docs/__docusaurus/debug/content',
    component: ComponentCreator('/Quikly_docs/__docusaurus/debug/content','879'),
    exact: true
  },
  {
    path: '/Quikly_docs/__docusaurus/debug/globalData',
    component: ComponentCreator('/Quikly_docs/__docusaurus/debug/globalData','3d4'),
    exact: true
  },
  {
    path: '/Quikly_docs/__docusaurus/debug/metadata',
    component: ComponentCreator('/Quikly_docs/__docusaurus/debug/metadata','0a8'),
    exact: true
  },
  {
    path: '/Quikly_docs/__docusaurus/debug/registry',
    component: ComponentCreator('/Quikly_docs/__docusaurus/debug/registry','3ea'),
    exact: true
  },
  {
    path: '/Quikly_docs/__docusaurus/debug/routes',
    component: ComponentCreator('/Quikly_docs/__docusaurus/debug/routes','113'),
    exact: true
  },
  {
    path: '/Quikly_docs/blog/archive',
    component: ComponentCreator('/Quikly_docs/blog/archive','6f6'),
    exact: true
  },
  {
    path: '/Quikly_docs/markdown-page',
    component: ComponentCreator('/Quikly_docs/markdown-page','d42'),
    exact: true
  },
  {
    path: '/Quikly_docs/docs',
    component: ComponentCreator('/Quikly_docs/docs','32f'),
    routes: [
      {
        path: '/Quikly_docs/docs/intro',
        component: ComponentCreator('/Quikly_docs/docs/intro','d9e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Quikly_docs/docs/Pm assist/miniext',
        component: ComponentCreator('/Quikly_docs/docs/Pm assist/miniext','b2e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Quikly_docs/docs/Pm assist/record',
        component: ComponentCreator('/Quikly_docs/docs/Pm assist/record','74b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Quikly_docs/docs/Pm assist/screenshot',
        component: ComponentCreator('/Quikly_docs/docs/Pm assist/screenshot','71d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Quikly_docs/docs/Pm assist/starting_miniext',
        component: ComponentCreator('/Quikly_docs/docs/Pm assist/starting_miniext','b97'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Quikly_docs/docs/Pm_assist/miniext',
        component: ComponentCreator('/Quikly_docs/docs/Pm_assist/miniext','142'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Quikly_docs/docs/Pm_assist/screenshot',
        component: ComponentCreator('/Quikly_docs/docs/Pm_assist/screenshot','1bb'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/Quikly_docs/',
    component: ComponentCreator('/Quikly_docs/','14a'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
