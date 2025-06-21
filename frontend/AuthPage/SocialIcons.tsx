import React from 'react';
import { GoogleIcon, FacebookIcon, GithubIcon, LinkedInIcon } from './Icons';

const SocialIcons: React.FC = () => {
  const iconClasses = "w-5 h-5"; // Adjusted size slightly
  const linkClasses = "inline-flex items-center justify-center w-10 h-10 border border-gray-300 rounded-full hover:border-indigo-500 hover:bg-indigo-50 transition-all duration-300 mx-1.5 group";
  
  return (
    <div className="flex justify-center my-4">
      <a href="#" aria-label="Login with Google" className={linkClasses}>
        <GoogleIcon className={`${iconClasses} text-gray-700 group-hover:scale-110 transition-transform duration-300`} />
      </a>
      <a href="#" aria-label="Login with Facebook" className={linkClasses}>
        <FacebookIcon className={`${iconClasses} text-gray-700 group-hover:scale-110 transition-transform duration-300`} />
      </a>
      <a href="#" aria-label="Login with Github" className={linkClasses}>
        <GithubIcon className={`${iconClasses} text-gray-700 group-hover:scale-110 transition-transform duration-300`} />
      </a>
      <a href="#" aria-label="Login with LinkedIn" className={linkClasses}>
        <LinkedInIcon className={`${iconClasses} text-gray-700 group-hover:scale-110 transition-transform duration-300`} />
      </a>
    </div>
  );
};

export default SocialIcons;
