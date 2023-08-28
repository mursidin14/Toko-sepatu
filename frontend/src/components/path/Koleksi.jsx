import KoleksiJson from 'json/koleksi'


export default function Koleksi() {
    return (
        <section className="container koleksi mt-5 pt-3 pb-3">
            <h1 className="h2 font-weigh-bold line-height-1 mb-3 text-center">
                Koleksi Sepatu
            </h1>
            <p className="text-gray-700 font-weight-laight text-center">
                Sepatu Dengan Kualitas Terbaik Di Indonesia Kini Hadir Untuk Anda
            </p>
            <div className="row pt-4">
                {
                    KoleksiJson.map((item, i) => (
                        <div className="col-lg-4 col-md-6 col-sm-12" key={i}>
                            <div className="card m-auto">
                                <a href="# ">
                                        <img className="card-img-top" src={`${item.img}`} alt={`${item.alt}`} />
                                        <div className="card-body">
                                            <p className="card-text">{item.name}</p>
                                            <h5 className="card-text">Rp.{item.price}</h5>
                                        </div>
                                    </a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}