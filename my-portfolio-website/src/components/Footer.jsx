import React from "react";

/*
Footer Component
- Shows copyright and quick navigation links
- Consistent minimal Tailwind styling
*/

const Footer = () => {
  return (
    <footer className="bg-white  border-t mt-20">
      <p className="text-gray-600 text-center text-sm">
        © {new Date().getFullYear()} Michael Akinyemi. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
