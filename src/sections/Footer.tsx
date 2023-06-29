import React from 'react';

function Footer() {
  return (
    <footer className="footer py-4">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-4 text-lg-start">Copyright &copy; SoundSeeker 2023</div>
                <div className="col-lg-4 text-lg-end">
                    <a className="link-dark text-decoration-none me-3" >Privacy Policy</a>
                    <a className="link-dark text-decoration-none" >Terms of Use</a>
                </div>
            </div>
        </div>
    </footer>
  );
}

export default Footer;
