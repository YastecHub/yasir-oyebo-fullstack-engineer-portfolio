import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-slate-950 border-t border-slate-900 text-center">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-slate-500 text-sm">
          &copy; 2025 Yasir Oyebo Oladimeji. Lagos-Built with <span className="text-red-500">❤️</span> & React
        </p>
      </div>
    </footer>
  );
};

export default Footer;