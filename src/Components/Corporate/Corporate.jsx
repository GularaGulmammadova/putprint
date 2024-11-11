// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import "./Corporate.css";
import contactimagekorporativ from "./../../site assets/korporativ_image.png";

function Corporate() {
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

    const handleSubmit = async (e) => {
        e.preventDefault();
    
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
                alert('Məlumatlar uğurla göndərildi');
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
    
                if (errorData.username && errorData.username.includes('User with this username already exists.')) {
                    alert('Bu istifadəçi adı artıq mövcuddur. Yenidən cəhd edin.');
                } else {
                    alert('Məlumatlar göndərilərkən xəta baş verdi: ' + errorData.message || 'Naməlum xəta');
                }
            }
        } catch (error) {
            console.error('Xəta:', error);
            alert('Xəta baş verdi. Zəhmət olmasa, yenidən cəhd edin.');
        }
    };

    return (
        <>
            <div className='ContactPageBox'>
                <img src={contactimagekorporativ} className='fullscreen-image-korporativ' alt="Contact" />
                <p> Korporativ sifarişlər üçün bizimlə əlaqə saxlayın!</p>
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
                            <label htmlFor="contactNumber">Telefon Nömrəsi:</label>
                            <input
                                type="phone"
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
        </>
    );
}

export default Corporate;
