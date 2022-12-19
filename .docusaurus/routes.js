
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
    component: ComponentCreator('/Quikly_docs/docs','2d5'),
    routes: [
      {
        path: '/Quikly_docs/docs/intro',
        component: ComponentCreator('/Quikly_docs/docs/intro','d9e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Quikly_docs/docs/Pm assist/miniextpro',
        component: ComponentCreator('/Quikly_docs/docs/Pm assist/miniextpro','36e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Quikly_docs/docs/Pm_assist/miniextds',
        component: ComponentCreator('/Quikly_docs/docs/Pm_assist/miniextds','8f3'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Quikly_docs/docs/PMassist/miniext',
        component: ComponentCreator('/Quikly_docs/docs/PMassist/miniext','031'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Quikly_docs/docs/PMassist/record',
        component: ComponentCreator('/Quikly_docs/docs/PMassist/record','a21'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Quikly_docs/docs/PMassist/screenshot',
        component: ComponentCreator('/Quikly_docs/docs/PMassist/screenshot','60f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Quikly_docs/docs/PMassist/starting_miniext',
        component: ComponentCreator('/Quikly_docs/docs/PMassist/starting_miniext','dc3'),
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
