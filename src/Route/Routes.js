import React from 'react';
import Bar from '../components/Bar';
import Foo from '../components/Foo';
import FooChild from '../components/FooChild'
import NotFound from '../components/NotFound';

export default [{
    path: '/Bar',
    component: Bar,
  }, {
    path: '/Foo',
    component: Foo,
    routes: [{
      path: '/Foo/FooChild',
      component: FooChild,
    }]
  }, {
    path: '/',
    component: () => <div> Index </div>,
  },
  {
    component: NotFound
  }
];