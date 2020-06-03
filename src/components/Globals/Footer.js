import React from 'react'

const Footer = () => {
    return (
        <footer className="footer py-3">
            <div className="container">
                <div className="col-10 mx-auto col-md-6 text-yellow text-center text-captalize">
                    <h3>
                        All rights reserved &copy;
                        {new Date().getFullYear().toString()}
                    </h3>
                </div>
            </div>
        </footer>
    )
}

export default Footer
