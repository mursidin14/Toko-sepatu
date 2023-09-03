import FavoriteJson from 'json/favorite';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export default function Favorite() {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
      };

    return (
        <section className="container favorite mt-5 pt-3 pb-3">
            <h1 className="h2 font-weigh-bold line-height-1 mb-3 text-center">
                Sepatu Favorite
            </h1>
            <p className="text-gray-700 font-weight-laight text-center">
                Sepatu Dengan Penjualan terbanyak karna banyak di minati
            </p>
            <Slider {...settings} >
                {
                    FavoriteJson.map((item, i) => (
                            <div className="card" key={i}>
                                <a href="# ">
                                        <img className="card-img-top" src={`${item.img}`} alt={`${item.alt}`} />
                                        <div className="card-body">
                                            <p className="card-text">{item.name}</p>
                                            <h5 className="card-text">Rp.{item.price}</h5>
                                        </div>
                                    </a>
                            </div>
                    ))
                }
            </Slider>
        </section>
    )
}