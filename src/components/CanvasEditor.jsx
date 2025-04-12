/* global fabric */
import { useEffect, useRef } from 'react';

export default function CanvasEditor({ imageUrl }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = new window.fabric.Canvas('fabric-canvas', {
      width: 800,
      height: 600,
    });

    canvasRef.current = canvas;

    window.fabric.Image.fromURL(imageUrl, (img) => {
      img.set({ selectable: false });
      canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
        scaleX: canvas.width / img.width,
        scaleY: canvas.height / img.height,
      });
    }, { crossOrigin: 'anonymous' });
    
  
    return () => {
      canvas.dispose();
    };
  }, [imageUrl]);

  const addText = () => {
    const text = new window.fabric.IText('Your text here', {
      left: 100,
      top: 100,
      fontSize: 20,
      fill: 'black',
    });
    canvasRef.current.add(text);
  };

  const addShape = (type) => {
    const f = window.fabric;
    let shape;
    if (type === 'rect') {
      shape = new f.Rect({ width: 100, height: 60, fill: 'blue', left: 50, top: 50 });
    } else if (type === 'circle') {
      shape = new f.Circle({ radius: 40, fill: 'green', left: 150, top: 150 });
    } else if (type === 'triangle') {
      shape = new f.Triangle({ width: 80, height: 80, fill: 'red', left: 250, top: 250 });
    }
    if (shape) canvasRef.current.add(shape);
  };

  const handleDownload = () => {
    const dataURL = canvasRef.current.toDataURL({ format: 'png' });
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'edited-image.png';
    link.click();
  };

  return (
    <div>
      <canvas id="fabric-canvas" />
      <div className="controls">
        <button onClick={addText}>Add Text</button>
        <button onClick={() => addShape('rect')}>Rectangle</button>
        <button onClick={() => addShape('circle')}>Circle</button>
        <button onClick={() => addShape('triangle')}>Triangle</button>
        <button onClick={handleDownload}>Download</button>
      </div>
    </div>
  );
}
