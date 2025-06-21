import React, { useState } from 'react';
import InputField from './InputField';
import SocialIcons from './SocialIcons';
import { UserIcon, LockIcon, EmailIcon } from './Icons';

const DURATION_VAL = 600; // ms
const DURATION_CLASS = `duration-[${DURATION_VAL}ms]`;

const AuthForm: React.FC = () => {
  const [activePanel, setActivePanel] = useState<'signIn' | 'signUp'>('signIn');
  const [animateToCover, setAnimateToCover] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  
  const commonIconClass = "w-4 h-4 text-gray-400";

  const handleTogglePanel = (targetPanel: 'signIn' | 'signUp') => {
    if (isAnimating || targetPanel === activePanel) return;

    setIsAnimating(true);
    setAnimateToCover(true); // Start expanding overlay

    // After overlay expands, switch content and start contracting
    setTimeout(() => {
      setActivePanel(targetPanel);
      setAnimateToCover(false); // Start contracting overlay to new position
    }, DURATION_VAL);

    // Total animation time
    setTimeout(() => {
      setIsAnimating(false);
    }, DURATION_VAL * 2);
  };

  const handleSignInSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Sign In Submitted (Placeholder)");
  };

  const handleSignUpSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Sign Up Submitted (Placeholder)");
  };
  
  // Overlay dynamic styling
  const overlayBaseClasses = `absolute top-0 h-full bg-indigo-500 text-white overflow-hidden z-30 transition-all ${DURATION_CLASS} ease-in-out`;
  let overlayDynamicClasses = '';
  if (animateToCover) {
    overlayDynamicClasses = 'w-full left-0 rounded-2xl';
  } else {
    if (activePanel === 'signIn') {
      overlayDynamicClasses = 'w-1/2 left-0 rounded-l-2xl rounded-r-[150px]';
    } else { // signUp
      overlayDynamicClasses = 'w-1/2 left-[50%] rounded-r-2xl rounded-l-[150px]';
    }
  }

  // Sign Up Form Panel (Left)
  const signUpFormBaseClasses = `absolute top-0 left-0 w-1/2 h-full flex flex-col justify-center items-center p-6 sm:p-10 text-center transition-all ${DURATION_CLASS} ease-in-out`;
  let signUpFormDynamicClasses = '';
  if (activePanel === 'signUp' && !animateToCover) {
    signUpFormDynamicClasses = 'opacity-100 z-10 translate-x-0';
  } else {
    signUpFormDynamicClasses = 'opacity-0 z-0 -translate-x-full pointer-events-none';
  }

  // Sign In Form Panel (Right)
  const signInFormBaseClasses = `absolute top-0 left-1/2 w-1/2 h-full flex flex-col justify-center items-center p-6 sm:p-10 text-center transition-all ${DURATION_CLASS} ease-in-out`;
  let signInFormDynamicClasses = '';
  if (activePanel === 'signIn' && !animateToCover) {
    signInFormDynamicClasses = 'opacity-100 z-10 translate-x-0';
  } else {
    signInFormDynamicClasses = 'opacity-0 z-0 translate-x-full pointer-events-none';
  }

  // Overlay Content Panels
  const overlayContentBaseClasses = `absolute inset-0 flex flex-col justify-center items-center p-6 sm:p-10 text-center transition-all ${DURATION_CLASS} ease-in-out`;

  // Classes for "Hello, Friend!" content (prompts to Sign Up)
  let signInPromptTextClasses = overlayContentBaseClasses;
  if (activePanel === 'signIn') {
    signInPromptTextClasses += animateToCover ? ' opacity-0 -translate-x-[20%]' : ' opacity-100 translate-x-0';
  } else { // activePanel === 'signUp'
    signInPromptTextClasses += ' opacity-0 translate-x-[20%] pointer-events-none';
  }

  // Classes for "Welcome Back!" content (prompts to Sign In)
  let signUpPromptTextClasses = overlayContentBaseClasses;
  if (activePanel === 'signUp') {
    signUpPromptTextClasses += animateToCover ? ' opacity-0 translate-x-[20%]' : ' opacity-100 translate-x-0';
  } else { // activePanel === 'signIn'
    signUpPromptTextClasses += ' opacity-0 -translate-x-[20%] pointer-events-none';
  }

  return (
    <div className="bg-white w-[900px] max-w-[95vw] min-h-[550px] sm:h-[550px] rounded-2xl shadow-2xl relative overflow-hidden">
      {/* Sign Up Form Panel */}
      <div className={`${signUpFormBaseClasses} ${signUpFormDynamicClasses}`}>
        <h1 className="text-3xl font-bold text-indigo-600 mb-6">Create Account</h1>
        <form onSubmit={handleSignUpSubmit} className="w-full max-w-xs">
          <InputField type="text" placeholder="Username" required icon={<UserIcon className={commonIconClass} />} aria-label="Username" />
          <InputField type="email" placeholder="Email" required icon={<EmailIcon className={commonIconClass} />} aria-label="Email" />
          <InputField type="password" placeholder="Password" required icon={<LockIcon className={commonIconClass} />} aria-label="Password"/>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-3 rounded-lg font-semibold hover:bg-indigo-600 transition-colors mt-2"
          >
            Sign Up
          </button>
        </form>
        <p className="text-gray-500 text-sm mt-6 mb-3">or sign up with</p>
        <SocialIcons />
      </div>

      {/* Sign In Form Panel */}
      <div className={`${signInFormBaseClasses} ${signInFormDynamicClasses}`}>
        <h1 className="text-3xl font-bold text-indigo-600 mb-6">Sign In</h1>
        <form onSubmit={handleSignInSubmit} className="w-full max-w-xs">
          <InputField type="email" placeholder="Email" required icon={<EmailIcon className={commonIconClass} />} aria-label="Email"/>
          <InputField type="password" placeholder="Password" required icon={<LockIcon className={commonIconClass} />} aria-label="Password"/>
          <a href="#" className="text-xs text-gray-500 hover:text-indigo-500 my-3 block">Forgot your password?</a>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-3 rounded-lg font-semibold hover:bg-indigo-600 transition-colors"
          >
            Sign In
          </button>
        </form>
        <p className="text-gray-500 text-sm mt-6 mb-3">or sign in with</p>
        <SocialIcons />
      </div>
      
      {/* Overlay Container */}
      <div className={`${overlayBaseClasses} ${overlayDynamicClasses}`}>
        {/* Overlay Content for prompting Sign Up (shown when Sign In form is active) */}
        <div className={signInPromptTextClasses}>
          <h2 className="text-3xl font-bold mb-3">Hello, Friend!</h2>
          <p className="text-sm mb-6 leading-relaxed max-w-xs">
            Enter your personal details and start your journey with us
          </p>
          <button
            onClick={() => handleTogglePanel('signUp')}
            disabled={isAnimating}
            className="px-8 py-3 border-2 border-white rounded-lg font-semibold hover:bg-white hover:text-indigo-500 transition-all duration-300 disabled:opacity-50"
          >
            Sign Up
          </button>
        </div>

        {/* Overlay Content for prompting Sign In (shown when Sign Up form is active) */}
         <div className={signUpPromptTextClasses}>
          <h2 className="text-3xl font-bold mb-3">Welcome Back!</h2>
          <p className="text-sm mb-6 leading-relaxed max-w-xs">
            To keep connected with us please login with your personal info
          </p>
          <button
            onClick={() => handleTogglePanel('signIn')}
            disabled={isAnimating}
            className="px-8 py-3 border-2 border-white rounded-lg font-semibold hover:bg-white hover:text-indigo-500 transition-all duration-300 disabled:opacity-50"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;