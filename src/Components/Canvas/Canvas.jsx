/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import styles from './Canvas.module.css';
import LeftTools from "../LeftTools/LeftTools";
import ManageFiles from "../ManageFiles/ManageFiles";
import { Transformer, Stage, Layer, Image as KonvaImage, Text, Rect } from 'react-konva';

const Canvas = ({frontSide, backSide}) => {
  const [imageNode, setImageNode] = useState(null);
  const [labelNode, setLabelNode] = useState(null);
  const [cvsWidth, setCvsWidth] = useState(window.innerWidth / 2);
  const [cvsHeight, setCvsHeight] = useState((window.innerHeight / 10) * 8);
  const [showTrasformer, setShowTransformer] = useState(false);
  const [showTrasformerL, setShowTransformerL] = useState(false);

  const handleImageClick = () => {
      setShowTransformer(true);  
  };
  
  useEffect(() => {
      const handleResize = () => {
          setCvsWidth(window.innerWidth / 2);
          setCvsHeight((window.innerHeight / 10) * 8);
      };

      window.addEventListener('resize', handleResize);

      
      return () => {
          window.removeEventListener('resize', handleResize);
      };
  }, []);

  const [showFront, setShowFront] = useState(true);

  
  const [tShirt, setTshirt] = useState(null);
  const [backTshirt, setBackTshirt] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [imageSrcBack, setImageSrcBack] = useState(null);

  const [backContent, setBackContent] = useState({
    tshirtColor: 'white',
    image: {
      value: '',
      width:  (cvsWidth / 8) ,
      height: (cvsWidth / 8),
      rotation: 0,
      x:  7*(cvsWidth / 2)/8,
      y:  cvsHeight/2 - (cvsWidth/16) - 20
    },
    label: {
      title: '',
      tshirtLabel: '',
      width: (cvsWidth / 8),
      height: 20,
      fontFamily: 'Arial',
      fontSize: 20,
      rotation: 0,
      color: 'black',
      x:  7*(cvsWidth / 2)/8,
      y: cvsHeight/2 - (cvsWidth/16) - 20
    }
  })

  const [frontContent, setFrontContent] = useState({
    tshirtColor: 'white',

    image: {
      value: '',
      width: (cvsWidth / 8),
      height: (cvsWidth / 8),
      rotation: 0,
      x: 7*(cvsWidth / 2)/8,
      y: cvsHeight/2 - (cvsWidth/16) - 20
    },

    label: {
      title: '',
      tshirtLabel: '',
      fontFamily: 'Arial',
      fontSize: 20,
      rotation: 0,
      color: 'black',
      x: 7*(cvsWidth / 2)/8,
      y: cvsHeight/2 - (cvsWidth/16) - 20
    }
  })

  const handleTransform = (e) => {
      const node = e.target;
      const newWidth = Math.max(node.width() * node.scaleX(), 20);
      const newHeight = Math.max(node.height() * node.scaleY(), 20);
      const newRotation = node.rotation(); 

      node.setAttrs({
          scaleX: 1,
          scaleY: 1,
      });

      if (showFront) {
          setFrontContent(prevContent => ({...prevContent, image: { ...prevContent.image, width: newWidth, height: newHeight, rotation: newRotation}}));
      } else {
          setBackContent(prevContent => ({ ...prevContent, image: { ...prevContent.image, width: newWidth, height: newHeight, rotation: newRotation}}));
      }

      node.getLayer().batchDraw(); 
  };

  const handleLabelTransform = (e) => {
    const node = e.target;
    const newWidth = Math.max(node.width() * node.scaleX(), 20);
    const newHeight = Math.max(node.height() * node.scaleY(), 20);
    const newRotation = node.rotation(); 

    node.setAttrs({
        scaleX: 1,
        scaleY: 1,
    });

    if (showFront) {
        setFrontContent(prevContent => ({...prevContent, label: { ...prevContent.label, width: newWidth, height: newHeight, rotation: newRotation}}));
    } else {
        setBackContent(prevContent => ({ ...prevContent, label: { ...prevContent.label, width: newWidth, height: newHeight, rotation: newRotation}}));
    }

    node.getLayer().batchDraw(); 
};

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
  
  const handleDragEnd = (e, t) => {
    const newX = e.target.x();
    const newY = e.target.y();


    if (showFront && t==='img') setFrontContent({...frontContent, image: {...frontContent.image, x: newX, y: newY}}); 
    if (!showFront && t==='img') setBackContent({...backContent, image: {...backContent.image, x: newX, y: newY}});
    if (showFront && t==='label') setFrontContent({...frontContent, label: {...frontContent.label, x: newX, y: newY}}); 
    if (!showFront && t==='label') setBackContent({...backContent, label: {...backContent.label, x: newX, y: newY}});

  };
  

  useEffect(() => {
    const img = new window.Image();
    img.src = frontSide; 
    img.onload = () => {
      setTshirt(img);
    };

    const backImg = new window.Image();
    backImg.src = backSide;
    backImg.onload = () => {
      setBackTshirt(backImg)
    }
  }, []); 

  useEffect(() => {
    if (imageSrc) {
      const img = new Image();
      img.src = imageSrc;
      setFrontContent({...frontContent, image: {...frontContent.image, value: img, height: currentImage.width * img.naturalHeight / img.naturalWidth}});
    }

  }, [imageSrc, showFront]);

  useEffect(() => {
    if (imageSrcBack) {
      const img = new Image();
      img.src = imageSrcBack;
      setBackContent({...backContent, image: {...backContent.image, value: img}});
    }
    
  }, [imageSrcBack, showFront]);

  const currentImage = showFront ? frontContent.image : backContent.image;
  const currentLabel = showFront ? frontContent.label : backContent.label;

  return (
    <div className={styles.flex}>
      <LeftTools 
        setShowTransformer={setShowTransformer}
        setContent={showFront ? setFrontContent : setBackContent}
        content={showFront ? frontContent : backContent}
        deleteImg={() => {
          if (showFront) {
            setImageSrc(''); 
            setFrontContent({...frontContent, image: {...frontContent.image, value: ''}})
          } else {
            setImageSrcBack('');
            setBackContent({...backContent, image: {...backContent.image, value: ''}})
          }
        }}
        handleImageChange={showFront ? handleImageChange : handleBackImageChange} 
      />
      <div className={styles.canvas}>
      <Stage width={cvsWidth} height={cvsHeight}>
        <Layer>
            {tShirt && (
            <>

              <Rect
                width={(cvsWidth / 2) - 10}  
                height={(cvsWidth / 2)} 
                x={(cvsWidth / 4) + 5} 
                y={(cvsHeight/2 - (cvsWidth/4))} 
                fill={showFront ? frontContent.tshirtColor : backContent.tshirtColor} 
                listening={false} 
              />

              <Rect
                width={(cvsWidth / 5)}  
                height={(cvsWidth / 4)} 
                x={4*(cvsWidth / 2)/5} 
                y={cvsHeight/2 - (cvsWidth/8) - 20} 
                fill="transparent"
                stroke="lightGrey"
                strokeWidth={2} 
                listening={false} 
              />

              <KonvaImage
                  image={showFront ? tShirt : backTshirt}
                  width={(cvsWidth / 2)}  
                  height={(cvsWidth / 2)} 
                  x={(cvsWidth / 4)} 
                  y={(cvsHeight/2 - (cvsWidth/4))} 
              />

              {currentImage.value && (
              <KonvaImage
                image={currentImage.value}
                width={currentImage.width}
                height={currentImage.height}
                x={currentImage.x}
                y={currentImage.y}
                rotation={currentImage.rotation}
                draggable
                onDragEnd={(e) => handleDragEnd(e, 'img')} 
                onDragMove={(e) => {setImageNode(e.target);}} 
                onTransform={handleTransform} 
                onClick={handleImageClick}
                ref={(node) => {
                  if (node) {
                    setImageNode(node); 
                  }
                }} />
              )}
        
              {showTrasformer && imageNode && (
                <Transformer
                  nodes={[imageNode]} 
                  padding={5}
                  flipEnabled={false}
                  boundBoxFunc={(oldBox, newBox) => {
                    if (Math.abs(newBox.width) < 20 || Math.abs(newBox.height) < 20) {
                      return oldBox;
                    }
                    return newBox; 
                  }}
                />
              )}


              {currentLabel && currentLabel.title && currentLabel.title.length>0 && 
                <Text
                  draggable
                  text={currentLabel.tshirtLabel}
                  fontSize={currentLabel.fontSize}
                  fill={currentLabel.color}
                  fontFamily={currentLabel.fontFamily}
                  x={currentLabel.x} 
                  y={currentLabel.y} 
                  rotation={currentLabel.rotation}
                  onTransform={handleLabelTransform}
                  onClick={() => setShowTransformerL(true)}
                  onDragEnd={(e) => handleDragEnd(e, 'label')} 
                  onDragMove={(e) => setLabelNode(e.target)} 
                />
              }

              {labelNode && showTrasformerL && (
                <Transformer
                  nodes={[labelNode]} 
                  padding={5}
                  flipEnabled={false}
                  enabledAnchors={['top-left', 'top-right', 'bottom-left', 'bottom-right']} 
                  boundBoxFunc={(oldBox, newBox) => {
                    if (Math.abs(newBox.width) < 20 || Math.abs(newBox.height) < 20) {
                      return oldBox; 
                    }
                    return newBox; 
                  }}
                />
              )}

              <KonvaImage
                image={tShirt}
                width={100}
                height={100}
                x={10}
                y={10} 
                stroke="lightGrey"
                strokeWidth={3} 
                onClick={() => {setShowFront(true); setShowTransformer(false); setShowTransformerL(false);}}
              />

              <KonvaImage
                image={backTshirt}
                width={100}
                height={100}
                x={10}
                y={120} 
                stroke={"lightGrey"}
                strokeWidth={3} 
                onClick={() => {setShowFront(false); setShowTransformer(false); setShowTransformerL(false);}}
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

