import React from 'react';
import { FaGithub } from 'react-icons/fa6';

export const GithubIcon = ({ size = 18, className = '' }) => {
  return <FaGithub size={size} className={className} aria-hidden="true" />;
};
