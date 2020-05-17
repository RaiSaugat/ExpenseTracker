import React from 'react';
import { mount } from 'react-mounter';

import MainLayout from './layouts/MainLayout';
import { App } from '../imports/ui/App';
import AddExpensePage from '../imports/ui/pages/addExpensePage';

FlowRouter.route('/', {
  action() {
    mount(MainLayout, {
      content: <App />,
    });
  },
});

FlowRouter.route('/add', {
  action() {
    mount(MainLayout, {
      content: <AddExpensePage />,
    });
  },
});
