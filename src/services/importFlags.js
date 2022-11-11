function importAll(images) {
  const imagesObject = {};
  images.keys().map((item) => {
    imagesObject[item.replace('./', '')] = images(item);
    return imagesObject;
  });
  return imagesObject;
}

const images = importAll(require.context('../images/flags', false, /\.(gif)$/));

export default images;
