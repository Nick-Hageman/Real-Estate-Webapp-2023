import '../LandingPage.css';

export default function Portfolio() {
    let itemData = [ // Need to fetch images from CMS
      {img: "img/DJI_0085.JPG"},
      {img: "img/DJI_0009.JPG"},
      {img: "img/DJI_0352.JPG"},
      {img: "img/DJI_0011.JPG"},
      {img: "img/DJI_0249.JPG"},
      {img: "img/DJI_0060.JPG"},
      {img: "img/DJI_0097.JPG"},
      {img: "img/DJI_0338.JPG"},
      {img: "img/DJI_0146.JPG"}
    ]

    return (
      <div className='gallery-container'>
        {itemData.map((item) => (
            <img
              className='gallery-item'
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
        ))}
      </div>
    );
}
