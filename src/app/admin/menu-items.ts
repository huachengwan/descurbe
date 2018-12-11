import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [{
    path: '/admin',
    title: 'Dashboard',
    icon: '',
    class: '',
    label: '',
    labelClass: '',
    extralink: false,
    submenu: []
  }, {
    path: '',
    title: 'Events & Articles',
    icon: '',
    class: 'nav-small-cap',
    label: '',
    labelClass: '',
    extralink: true,
    submenu: []
  }, {
    path: '/admin/entry-event',
    title: 'Events Entry',
    icon: '',
    class: '',
    label: '',
    labelClass: '',
    extralink: false,
    submenu: []
  }
  /*, {
    path: '',
    title: 'UI Components',
    icon: '',
    class: 'nav-small-cap',
    label: '',
    labelClass: '',
    extralink: true,
    submenu: []
  }, {
    path: '/component/accordion',
    title: 'Accordion',
    icon: 'mdi mdi-equal',
    class: '',
    label: '',
    labelClass: '',
    extralink: false,
    submenu: []
  }*/
];
