import { useState } from 'react';
import axios from 'axios';
import styles from './AI.module.css';

const AI = () => {
  const [prompt, setPrompt] = useState('');
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false); 
  const [isButtonDisabled, setIsButtonDisabled] = useState(false); 

  const generateImages = async () => {
    setIsLoading(true); 
    setIsButtonDisabled(true); 

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
        setImages([response.data.image_url]); 
      } else {
        setError("API-dən gözlənilməyən cavab alındı.");
      }

    } catch (err) {
      console.error("API-dən məlumat alarkən xəta baş verdi:", err);
      setError('API-dən məlumat alarkən xəta baş verdi.');
    }

    setIsLoading(false); 

    setTimeout(() => {
      setIsButtonDisabled(false);
    }, 60000); 
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
        disabled={isButtonDisabled}
        style={{ cursor: isButtonDisabled ? 'not-allowed' : 'pointer' }} 
      >
        {isLoading ? 'Yaratma Prosesi Davam Edir...' : 'AI ilə yarat'}
      </button>
      
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default AI;