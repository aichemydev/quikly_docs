
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/quikly_docs/blog/archive',
    component: ComponentCreator('/quikly_docs/blog/archive','f90'),
    exact: true
  },
  {
    path: '/quikly_docs/markdown-page',
    component: ComponentCreator('/quikly_docs/markdown-page','702'),
    exact: true
  },
  {
    path: '/quikly_docs/docs',
    component: ComponentCreator('/quikly_docs/docs','cf7'),
    routes: [
      {
        path: '/quikly_docs/docs/intro',
        component: ComponentCreator('/quikly_docs/docs/intro','438'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/quikly_docs/docs/Pm assist/miniext',
        component: ComponentCreator('/quikly_docs/docs/Pm assist/miniext','154'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/quikly_docs/docs/Pm assist/record',
        component: ComponentCreator('/quikly_docs/docs/Pm assist/record','a62'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/quikly_docs/docs/Pm assist/screenshot',
        component: ComponentCreator('/quikly_docs/docs/Pm assist/screenshot','01d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/quikly_docs/docs/Pm assist/starting_miniext',
        component: ComponentCreator('/quikly_docs/docs/Pm assist/starting_miniext','37d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/quikly_docs/docs/Pm_assist/miniext',
        component: ComponentCreator('/quikly_docs/docs/Pm_assist/miniext','821'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/quikly_docs/docs/Pm_assist/screenshot',
        component: ComponentCreator('/quikly_docs/docs/Pm_assist/screenshot','516'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/quikly_docs/',
    component: ComponentCreator('/quikly_docs/','661'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
