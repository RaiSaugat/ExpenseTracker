import React from 'react';
import { mount } from 'react-mounter';

import MainLayout from './layouts/MainLayout';
import { App } from '../imports/ui/App';
import AddExpenseForm from '../imports/ui/pages/addExpenseForm';

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
      content: <AddExpenseForm />,
    });
  },
});
