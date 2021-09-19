const panoImage = document.querySelector('.pano-image');
const soyBeanImage = './assets/index/puente-paisaje.jpg';

const panorama = new PANOLENS.ImagePanorama( soyBeanImage );
const viewer = new PANOLENS.Viewer({
   container: panoImage,
   autoRotate: true,
   autoRotateSpeed: 0.5,
   controlBar: false
});

viewer.add(panorama);