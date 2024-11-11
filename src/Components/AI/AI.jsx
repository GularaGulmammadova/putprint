import { useState } from 'react';
import axios from 'axios';
import styles from './AI.module.css';

const AI = () => {
  const [prompt, setPrompt] = useState('');
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);

  const generateImages = async () => {
    try {
      // Boş şəkillər massivini hazırlayırıq ki, əvvəlki şəkillər təmizlənsin
      setImages([]);
      setError(null);

      const generatedImages = [];

      // API-ə 6 dəfə müraciət edirik
      for (let i = 0; i < 6; i++) {
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

        // Cavabda image_url varsa, generatedImages massivinə əlavə edirik
        if (response.data && response.data.image_url) {
          generatedImages.push(response.data.image_url);
        } else {
          setError("API-dən gözlənilməyən cavab alındı.");
          break;
        }
      }

      setImages(generatedImages);

    } catch (err) {
      console.error("API-dən məlumat alarkən xəta baş verdi:", err);
      setError('API-dən məlumat alarkən xəta baş verdi.');
    }
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
      <button className={styles.btn} onClick={generateImages}>AI ilə yarat</button>
      
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default AI;