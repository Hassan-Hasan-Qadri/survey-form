import React, { useState, useCallback } from 'react';
import { shapes, shapeItemColor, randomColor } from "../constant";
import Shape from "../components/shape";
import Modal from "../components/modal";

function Home() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedShape, setSelectedShape] = useState(null);

    let getRandomColor = ()=>{
        console.log(Math.floor(Math.random() *  randomColor.length));
        return randomColor[(Math.floor(Math.random() *  randomColor.length))];
    }

    const [shapeKeys, setShapeKeys] = useState(
    shapes.flat().reduce((acc, shape) => {
        acc[shape.name] = {
            submitted: false,
            color: getRandomColor(),
        }; 
        return acc;
    }, {})
    );

    const markDone = useCallback((shapeName) => {
        console.log(shapeKeys);
    setShapeKeys(prevShapeKeys => ({
        ...prevShapeKeys,
        [shapeName]: {
            submitted: true,
            color: shapeKeys[shapeName]['color'],
        }
    }));
    }, []);


  const handleShapeClick = useCallback((shapeName) => {
    setSelectedShape(shapeName);
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedShape(null);
  }, []);

  return (
    <div className="shapes-container">
      {shapes.map((shapeRow, rowIndex) => (
        <div key={rowIndex} className="shape-row">
          {shapeRow.map((shape, shapeIndex) => (
            <div 
              key={shapeIndex} 
              className="shape-item" 
              onClick={() => handleShapeClick(shape.name)}
            >
              <Shape 
                path={shape.shape} 
                strokeColor={shapeItemColor} 
                stopColor={shapeKeys[shape.name]['submitted'] ? shapeKeys[shape.name]['color'] : 'transparent'} 
                key={shapeKeys[shape.name]['submitted']}
                id={shape.name}
              />
              <div className="caption">{shape.name}</div>
            </div>
          ))}
        </div>
      ))}
      <Modal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        shapeName={selectedShape}
        markDone = {markDone}
      />
    </div>
  );
}

export default Home;
