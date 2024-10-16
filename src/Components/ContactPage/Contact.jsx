import React, { useState } from 'react';
import "./Contact.css";
import Navbar from "../Nav/Nav";
import contactimage from "../../site assets/images/contact.png";
import Footer from "../Footer/Footer";

function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        contactNumber: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form Data Submitted:', formData);
    };

    return (
        <>
            <div className='ContactPageBox'>
                <img src={contactimage} className='fullscreen-image' alt="Contact" />
                <p>Put&Print komandasından məsləhətlər və cavablar öyrənmək üçün bizimlə əlaqə saxlayın.</p>
                <div className='contact-form'>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="firstName">Ad:</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder='Adınızı daxil edin'
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Soyad:</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder='Soyadınızı daxil edin'
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">E-mail:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder='E-mailinizi daxil edin'
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="contactNumber">Telefon Nömrəsi:</label>
                            <input
                                type="tel"
                                id="contactNumber"
                                name="contactNumber"
                                value={formData.contactNumber}
                                onChange={handleChange}
                                placeholder='Telefon nömrənizi daxil edin'
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Mesaj:</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder='Mesajınızı daxil edin'
                                required
                            />
                        </div>
                        <button type="submit" className="submit-btn">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Contact;
