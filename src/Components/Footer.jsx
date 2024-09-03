import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
    const navigate = useNavigate()

    return (
        <>
            <footer>
                <div className="p1">
                    <span>QR Code Generator.</span>
                    <span>Welcome to our QR Code Generator, a powerful and user-friendly tool designed to help you create custom QR codes with ease.</span>
                    <span><a href='#qr_sec'>Try Now</a></span>
                </div>
                <div className="p2">
                    <span>Email : mdimteyaz6493@gmail.com</span>
                    <span>Linkedin : <a href="https://linkedin.com/in/imteyaz-alam-b835032ab" target="_blank" rel="noopener noreferrer">linkedin.com/in/imteyaz-alam-b835032ab</a></span>
                </div>
            </footer>
        </>
    )
}

export default Footer
