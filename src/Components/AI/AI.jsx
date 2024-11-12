import { useState } from 'react';
import axios from 'axios';
import styles from './AI.module.css';

const AI = () => {
  const [prompt, setPrompt] = useState('');
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Şəkil yaradılarkən göstərilən vəziyyət
  const [isButtonDisabled, setIsButtonDisabled] = useState(false); // 1 dəqiqəlik deaktiv vəziyyət

  const generateImages = async () => {
    setIsLoading(true); // Proses başlayarkən "Yaratma Prosesi Davam Edir..." yazısını göstər
    setIsButtonDisabled(true); // Butonu deaktiv et

    try {
      setImages([]);
      setError(null);

      const response = await axios.post(
        'https://put-print-ky689.ondigitalocean.app/ai/generate-image/',
        { prompt },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      console.log("API cavabı:", response.data);

      if (response.data && response.data.image_url) {
        setImages([response.data.image_url]); // Yalnız bir şəkil əlavə et
      } else {
        setError("API-dən gözlənilməyən cavab alındı.");
      }

    } catch (err) {
      console.error("API-dən məlumat alarkən xəta baş verdi:", err);
      setError('API-dən məlumat alarkən xəta baş verdi.');
    }

    setIsLoading(false); // Proses bitəndə "Yaratma Prosesi Davam Edir..." yazısını sil

    // 1 dəqiqə sonra butonu yenidən aktiv et
    setTimeout(() => {
      setIsButtonDisabled(false);
    }, 60000); // 60000 ms = 1 dəqiqə
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        {images.map((img, index) => (
          <div key={index} className={styles.img}>
            <a href={img} target="_blank" rel="noopener noreferrer">
              <img src={img} alt={`Generated ${index + 1}`} className={styles.generatedImage} />
            </a>
          </div>
        ))}
      </div>
      
      <h3 className={styles.label}>Sizin Promptunuzu Əlavə Edin:</h3>
      <textarea
        className={styles.textarea}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button 
        className={styles.btn} 
        onClick={generateImages} 
        disabled={isButtonDisabled} // Butonun deaktiv vəziyyəti
        style={{ cursor: isButtonDisabled ? 'not-allowed' : 'pointer' }} // Deaktiv olarkən işarə
      >
        {isLoading ? 'Yaratma Prosesi Davam Edir...' : 'AI ilə yarat'}
      </button>
      
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default AI;