import React from 'react';
import Header from '../../imports/ui/components/header';

const MainLayout = ({ content }) => {
  return (
    <div className="main-layout">
      <Header />
      {content}
    </div>
  );
};

export default MainLayout;
