import { useState, useEffect } from 'react';
import styles from './Canvas.module.css';
import LeftTools from "../LeftTools/LeftTools";
import ManageFiles from "../ManageFiles/ManageFiles";
import { Stage, Layer, Image as KonvaImage, Text, Rect } from 'react-konva';

const Canvas = () => {

  const [showFront, setShowFront] = useState(true);
  
  const [tShirt, setTshirt] = useState(null);
  const [backTshirt, setBackTshirt] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [imageSrcBack, setImageSrcBack] = useState(null);
  const [imageObj, setImageObj] = useState(null);

  const [backContent, setBackContent] = useState({
    tshirtColor: 'white',
    image: {
      value: '',
      width: 200,
      height: 200,
      rotation: 0
    },
    label: {
      title: '',
      tshirtLabel: '',
      fontFamily: 'Arial',
      fontSize: 20,
      rotation: 0,
      color: 'black'
    }
  })

  const [frontContent, setFrontContent] = useState({
    tshirtColor: 'white',

    image: {
      value: '',
      width: 200,
      height: 200,
      rotation: 0
    },

    label: {
      title: '',
      tshirtLabel: '',
      fontFamily: 'Arial',
      fontSize: 20,
      rotation: 0,
      color: 'black'
    }
  })

  const [imagePosition, setImagePosition] = useState({
    x: (window.innerWidth / 2) / 2 - 100, 
    y: (window.innerHeight / 10 * 8) / 2 - 100, 
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImageSrc(event.target.result);
        const img = new Image();
        img.src = event.target.result;
        setFrontContent({...frontContent, image: {...frontContent.image, value: img}})
      };
      reader.readAsDataURL(file);
    }
  };

  const handleBackImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImageSrcBack(event.target.result);
        const img = new Image();
        img.src = event.target.result;
        setBackContent({...backContent, image: {...backContent.image, value: img}});
      };
      reader.readAsDataURL(file);
    }
  }

  const handleDragMove = (e) => {
    const newX = e.target.x();
    const newY = e.target.y();
  
    const areaWidth = 250;
    const areaHeight = 400;
    const centerX = (window.innerWidth / 2) / 2 - 5; 
    const centerY = (window.innerHeight / 10 * 8) / 2 - 20;

    const constrainedX = showFront ? Math.min(
      Math.max(newX, centerX - areaWidth / 2), 
      centerX + areaWidth / 2 - frontContent.image.width 
    ) : Math.min(
      Math.max(newX, centerX - areaWidth / 2), 
      centerX + areaWidth / 2 - backContent.image.width 
    )


    const constrainedY = showFront ? Math.min(
      Math.max(newY, centerY - areaHeight / 2), 
      centerY + areaHeight / 2 - frontContent.image.height 
    ) : Math.min(
      Math.max(newY, centerY - areaHeight / 2), 
      centerY + areaHeight / 2 - backContent.image.height 
    ) ;
  
    setImagePosition({ x: constrainedX, y: constrainedY });
    e.target.x(constrainedX); 
    e.target.y(constrainedY); 
    e.target.getStage().batchDraw();
  };
  
  const handleDragEnd = (e) => {
    const newX = e.target.x();
    const newY = e.target.y();
  
    const areaWidth = 250;
    const areaHeight = 400;
    const centerX = (window.innerWidth / 2) / 2 - 5; 
    const centerY = (window.innerHeight / 10 * 8) / 2 - 20;
  
    showFront ? setImagePosition({ 
      x: Math.min(
        Math.max(newX, centerX - areaWidth / 2), 
        centerX + areaWidth / 2 - frontContent.image.width
      ), 
      y: Math.min(
        Math.max(newY, centerY - areaHeight / 2), 
        centerY + areaHeight / 2 - frontContent.image.height 
      ) 
    }) : setImagePosition({ 
      x: Math.min(
        Math.max(newX, centerX - areaWidth / 2), 
        centerX + areaWidth / 2 - backContent.image.width
      ), 
      y: Math.min(
        Math.max(newY, centerY - areaHeight / 2), 
        centerY + areaHeight / 2 - backContent.image.height 
      ) 
    })
  };
  

  useEffect(() => {
    const img = new window.Image();
    img.src = '/crew_front.png'; 
    img.onload = () => {
      setTshirt(img);
    };

    const backImg = new window.Image();
    backImg.src = '/crew_back.png';
    backImg.onload = () => {
      setBackTshirt(backImg)
    }
  }, []); 

  useEffect(() => {
    if (imageSrc) {
      const img = new Image();
      img.src = imageSrc;
      setFrontContent({...frontContent, image: {...frontContent.image, value: img}});
    }

  }, [imageSrc, showFront]);

  useEffect(() => {
    if (imageSrcBack) {
      const img = new Image();
      img.src = imageSrcBack;
      setBackContent({...backContent, image: {...backContent.image, value: img}});
    }
    
  }, [imageSrcBack, showFront]);


  return (
    <div className={styles.flex}>
      <LeftTools 
        setContent={showFront ? setFrontContent : setBackContent}
        content={showFront ? frontContent : backContent}
        image={imageObj ? imageObj.src : ''} 
        deleteImg={() => {setImageSrc(''); setImageObj('');}} 
        handleImageChange={showFront ? handleImageChange : handleBackImageChange} 
      />
      <div className={styles.canvas}>
      <Stage width={window.innerWidth / 2} height={(window.innerHeight / 10) * 8}>
        <Layer>
            {tShirt && (
            <>
              <Rect
                width={598} 
                height={650} 
                x={(window.innerWidth / 2) / 2 - 300} 
                y={(window.innerHeight / 10 * 8) / 2 - 325} 
                fill={showFront ? frontContent.tshirtColor : backContent.tshirtColor} 
                listening={false} 
              />

              <KonvaImage
                image={tShirt}
                width={100}
                height={130}
                x={10}
                y={10} 
                stroke="lightGrey"
                strokeWidth={2} 
                onClick={() => setShowFront(true)}
              />

              <KonvaImage
                image={backTshirt}
                width={100}
                height={130}
                x={10}
                y={150} 
                stroke="lightGrey"
                strokeWidth={2} 
                onClick={() => setShowFront(false)}
              />
              
              <KonvaImage
                image={showFront ? tShirt : backTshirt}
                width={600}
                height={650}
                x={(window.innerWidth / 2) / 2 - 300}
                y={(window.innerHeight / 10 * 8) / 2 - 325} 
              />

              {showFront ? (frontContent.image.value && (
                <KonvaImage
                  image={frontContent.image.value}
                  width={frontContent.image.width} 
                  height={frontContent.image.height}
                  x={imagePosition.x}
                  y={imagePosition.y}
                  draggable
                  rotation={frontContent.image.rotation}
                  onDragMove={handleDragMove} 
                  onDragEnd={handleDragEnd}
                />
              )) : (backContent.image.value && (
                <KonvaImage
                  image={backContent.image.value}
                  width={backContent.image.width} 
                  height={backContent.image.height}
                  x={imagePosition.x}
                  y={imagePosition.y}
                  draggable
                  rotation={backContent.image.rotation}
                  onDragMove={handleDragMove} 
                  onDragEnd={handleDragEnd}
                />
              ))}

              {showFront ? (frontContent.label.title && 
                <Text
                  draggable
                  text={frontContent.label.tshirtLabel}
                  fontSize={frontContent.label.fontSize}
                  fill={frontContent.label.color}
                  fontFamily={frontContent.label.fontFamily}
                  x={(window.innerWidth / 2) / 2 - (frontContent.label.title.length * 10) / 2} 
                  y={(window.innerHeight / 10 * 8) / 2 + 30} 
                  rotation={frontContent.label.rotation}
                />) : (backContent.label.title && 
                <Text
                  draggable
                  text={backContent.label.tshirtLabel}
                  fontSize={backContent.label.fontSize}
                  fill={backContent.label.color}
                  fontFamily={backContent.label.fontFamily}
                  x={(window.innerWidth / 2) / 2 - (backContent.label.title.length * 10) / 2} 
                  y={(window.innerHeight / 10 * 8) / 2 + 30} 
                  rotation={backContent.label.rotationn}
                />
              )}

              <Rect
                width={250} 
                height={400}
                x={(window.innerWidth / 2) / 2 - 130} 
                y={(window.innerHeight / 10 * 8) / 2 - 220}
                fill="transparent"
                stroke="lightGrey"
                strokeWidth={2} 
                listening={false} 
              />

            </>
          )}
        </Layer>
      </Stage>
      </div>
      <ManageFiles 
      setColor={(c) => {
        setFrontContent({...frontContent, tshirtColor: c}); setBackContent({...backContent, tshirtColor: c})
      }} 
      image={showFront ? frontContent.image.value.src : backContent.image.value.src}
       />
    </div>
  );
};

export default Canvas;

