import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";
import cls from "./Home.module.css";
import { Button } from "antd";
import { saveAs } from "file-saver";

const objects = [
  {
    id: 1,
    title: "Стол",
    img: "/table.png",
    x: 0,
    y: 0,
  },
  {
    id: 2,
    title: "Кухня",
    img: "/kitchen.png",
    x: 0,
    y: 0,
  },
  {
    id: 3,
    title: "Плита",
    img: "/stove.png",
    x: 0,
    y: 0,
  },
  {
    id: 4,
    title: "Санузел",
    img: "/toilet.png",
    x: 0,
    y: 0,
  },
  {
    id: 5,
    title: "Кровать",
    img: "/bed.png",
    x: 0,
    y: 0,
  },
];

const Home = () => {
  const [furniture, setFurniture] = useState([]);

  const handleDragStart = (object) => () => {
    const newFurniture = { ...object, x: 0, y: 0 };
    setFurniture([...furniture, newFurniture]);
  };

  const handleSaveLayout = () => {
    const layout = furniture.map((obj) => {
      return { id: obj.id, title: obj.title, img: obj.img, x: obj.x, y: obj.y };
    });

    const jsonLayout = JSON.stringify(layout, null, 2);
    console.log("Сохраненная расстановка:", jsonLayout);

    const blob = new Blob([jsonLayout], { type: "application/json" });

    saveAs(blob, "layout.json");
  };

  const handleLoadLayout = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = (event) => {
      try {
        const layoutData = JSON.parse(event.target.result);

        const updatedFurniture = layoutData
          .map((obj) => {
            const correspondingObject = objects.find(
              (item) => item.id === obj.id,
            );
            if (correspondingObject) {
              return {
                ...correspondingObject,
                x: obj.x || 0,
                y: obj.y || 0,
              };
            }
            return null;
          })
          .filter((item) => item !== null);

        setFurniture([]);

        setFurniture(updatedFurniture);
      } catch (error) {
        console.error("Ошибка чтения файла:", error);
      }
    };
    reader.readAsText(file);
  };

  useEffect(() => {
    console.log(furniture);
  }, [furniture]);

  return (
    <div className={cls.root}>
      <div className={cls.selectItems}>
        <div className={cls.boxItems}>
          {objects.map((obj) => (
            <div className={cls.boxContainer} key={obj.id}>
              <span>{obj.title}</span>
              <div className={cls.boxItem} onClick={handleDragStart(obj)}>
                <img className={cls.boxImg} src={obj.img} alt={obj.title} />
              </div>
            </div>
          ))}
        </div>
        <div className={cls.btns}>
          <Button onClick={() => setFurniture([])} danger>
            Удалить все
          </Button>
          <Button onClick={handleSaveLayout}>Сохранить расстановку</Button>

          <input type="file" accept=".json" onChange={handleLoadLayout} />
        </div>
      </div>
      <div className={cls.sendBox}>
        {furniture.map((obj) => (
          <Draggable
            key={obj.id}
            defaultPosition={{ x: obj.x, y: obj.y }}
            onStop={(event, data) => {
              const updatedFurniture = furniture.map((item) => {
                if (item.id === obj.id) {
                  return {
                    ...item,
                    x: data.x,
                    y: data.y,
                  };
                }
                return item;
              });
              setFurniture(updatedFurniture);
            }}
          >
            <div className={cls.boxItem}>
              <img className={cls.boxImg} src={obj.img} alt={obj.title} />
              <span>{obj.title}</span>
            </div>
          </Draggable>
        ))}
      </div>
    </div>
  );
};

export default Home;
