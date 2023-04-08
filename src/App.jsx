import Gallery from './My Components/Gallery'
function App() {
  const galleryImages = [
    {
      url: "https://trabotti.com.ua/upload/3/compression/1617027614564-Fragment.png",
      alt: "img1",
      title: "Inspiration",
    },
    {
      url: "https://trabotti.com.ua/upload/2/compression/1617096087755-Fragment5.png",
      alt: "img2",
      title: "Amenitis",
    },
    {
      url: "https://trabotti.com.ua/upload/3/compression/1627303533813-Bezymyannyy.jpg",
      alt: "img3",
      title: "Perfection at the enterance",
    },
    {
      url: "https://trabotti.com.ua/upload/7/compression/1617092779507-Ptichka%20dvor2.png",
      alt: "img4",
      title: "Quality is in the details",
    },
    {
      url: "https://trabotti.com.ua/upload/8/compression/1617095154924-Fragment4.png",
      alt: "img5",
      title: "Fitness Space - your health zone",
    },
    {
      url: "https://trabotti.com.ua/upload/3/compression/1616684495109-Ploshchad.jpg",
      alt: "img6",
      title: "True Value is always inside",
    },
    {
      url: "https://trabotti.com.ua/upload/7/compression/1616689962054-Fragment%20(1).jpg",
      alt: "img7",
      title: "Sea. Culture. A life.",
    },
  ];
  return (
   
    <div className="App">
      <Gallery galleryImages={galleryImages}/>
    </div>
  )
}

export default App
