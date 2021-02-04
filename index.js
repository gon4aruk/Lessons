const addImage = (imgSrc, callback) => {
  const imageElem = document.createElement("img");
  imageElem.setAttribute("alt", "My image");
  imageElem.src = imgSrc;
  const containerElem = document.querySelector(".page");
  containerElem.append(imageElem);

  const onImageLoad = () => {
    const { width, height } = imageElem;
    callback(null, { width, height });
  };

  imageElem.addEventListener("load", onImageLoad);

  imageElem.addEventListener("error", () =>
    callback("Image load is failed...")
  );
};

// callack example

const onImageLoaded = (error, imgElem) => {
  if (error) {
    console.log(error);
    return;
  }
  const { width, height } = imgElem;
  const sizeElem = document.querySelector(".image-size");
  sizeElem.textContent = `${width} x ${height}`;
};

// test call
addImage(
  "https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg",
  onImageLoaded
);
