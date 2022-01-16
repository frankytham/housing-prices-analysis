import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div>
        <h3>House Prices Analysis</h3>
        <p>
          <span>Copyright &copy; {new Date().getFullYear()}. Franky Tham. </span>
          <a
            href="https://github.com/frankytham/housing-prices-analysis"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repo
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer;
