


export default function About() {
    return (
        <section className="container mt-5 pt-5 mb-5 about">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="card ml-auto">
                        <img className="card-img-top" src={`./images/about.png`} alt="about"/>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="card mr-auto pt-5">
                        <h1 className="font-weigh-bold line-height-1 mb-4">
                        Toko.RM Shoes <br/>
                        Since 2023
                        </h1>
                        <p className="font-weight-laight text-gray-900 w-75">Toko kami berdiri sejak 2014 hingga sekarang dengan kualitas sepatu terbaik dan harga yang terjangkau, dapatkan penawaran spesial setiap hari sabtu dan minggu.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}