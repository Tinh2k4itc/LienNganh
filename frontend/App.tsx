import React from 'react';
import HomeForm from './Homepage/HomeForm';

const App: React.FC = () => {
  return (
    // The main background color is now controlled by index.html body or HomePage's root div if needed.
    // The previous gradient bg-gradient-to-br from-slate-100 to-sky-100 is removed as HomePage has its own section backgrounds.
    <HomeForm />
  );
};

export default App;
