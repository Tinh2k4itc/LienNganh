import React, { useState } from 'react';
import HomeForm from './Homepage/HomeForm';
import AuthForm from './AuthPage/AuthForm'; // Import AuthForm

const App: React.FC = () => {
  const [showAuthForm, setShowAuthForm] = useState(false);

  const handleAuthClick = () => {
    setShowAuthForm(true);
  };

  const handleCloseAuthForm = () => {
    setShowAuthForm(false);
  };

  return (
    <>
      {showAuthForm ? (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
          <AuthForm onClose={handleCloseAuthForm} />
        </div>
      ) : (
        <HomeForm onAuthClick={handleAuthClick} />
      )}
    </>
  );
};

export default App;