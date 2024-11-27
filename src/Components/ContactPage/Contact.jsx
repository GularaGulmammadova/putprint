// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import "./Contact.css";
import contactimage from "./../../site assets/contactimage.png";
import { Bounce, toast, ToastContainer } from 'react-toastify';

function Contact() {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        message: '',
        username: 'defaultName',
        password: 'defaultPassword123'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Updated phone validation for Azerbaijani phone numbers (without +994 and allowing various prefixes)
    const validatePhone = (phone) => {
        const phoneRegex = /^(050|051|055|070|077)[0-9]{7}$/;
        return phoneRegex.test(phone);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateEmail(formData.email)) {
            toast.error("Zəhmət olmasa düzgün e-mail daxil edin. '@' simvolu daxil edilməlidir.", {
                position: "top-right",
                autoClose: 5000,
            });
            return;
        }

        if (!validatePhone(formData.phone)) {
            toast.error("Telefon nömrəsi düzgün formatda olmalıdır: 0501234567", {
                position: "top-right",
                autoClose: 5000,
            });
            return;
        }

        const uniqueUsername = `defaultName_${Math.floor(Math.random() * 900000) + 100000}`;
        const formDataWithUniqueUsername = { ...formData, username: uniqueUsername };

        console.log('Form data:', formDataWithUniqueUsername);

        try {
            const response = await fetch('https://put-print-ky689.ondigitalocean.app/api/users/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formDataWithUniqueUsername)
            });

            if (response.ok) {
                console.log('Form məlumatları uğurla göndərildi:', formDataWithUniqueUsername);
                toast.success('Məlumatınız uğurla göndərildi!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });

                // Clear form data after successful submission
                setFormData({
                    first_name: '',
                    last_name: '',
                    email: '',
                    phone: '',
                    message: '',
                    username: 'defaultName',
                    password: 'defaultPassword123'
                });
            } else {
                const errorData = await response.json();
                console.error('Server xətası:', errorData);
                toast.error('Məlumatlar göndərilərkən xəta baş verdi: ' + (errorData.message || 'Naməlum xəta'), {
                    position: "top-right",
                    autoClose: 5000,
                });
            }
        } catch (error) {
            console.error('Xəta:', error);
            toast.error('Xəta baş verdi. Zəhmət olmasa, yenidən cəhd edin.', {
                position: "top-right",
                autoClose: 5000,
            });
        }
    };

    return (
        <>
            <div className='ContactPageBox'>
                <img src={contactimage} className='fullscreen-image' alt="Contact" />
                <p>Sualların və məsləhətlərin üçün Put&Print komandası ilə əlaqə saxla.</p>
                <div className='contact-form'>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="first_name">Ad:</label>
                            <input
                                type="text"
                                id="first_name"
                                name="first_name"
                                value={formData.first_name}
                                onChange={handleChange}
                                placeholder='Adınızı daxil edin'
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="last_name">Soyad:</label>
                            <input
                                type="text"
                                id="last_name"
                                name="last_name"
                                value={formData.last_name}
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
                            <label htmlFor="contact_number">Telefon Nömrəsi:</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
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
                        <button type="submit" className="submit-btn">Göndər</button>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </>
    );
}

export default Contact;