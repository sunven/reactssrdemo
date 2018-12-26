import React from 'react';
import Bar from '../components/Bar';
import Foo from '../components/Foo';
import FooChild from '../components/FooChild'
import NotFound from '../components/NotFound';

export default [{
    path: '/Bar',
    component: Bar,
    exact:true
  }, {
    path: '/Foo',
    component: Foo,
    exact:true,
    routes: [{
      path: '/Foo/FooChild',
      exact:true,
      component: FooChild
    }]
  }, {
    path: '/',
    exact:true,
    component: () => <div> Index </div>,
  },
  {
    component: NotFound
  }
];