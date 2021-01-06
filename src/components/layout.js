import React from 'react';

export default function Layout({ children }) {
  return (
    <div>
      <h1>This is our layout component</h1>
      {children}
    </div>
  );
}
