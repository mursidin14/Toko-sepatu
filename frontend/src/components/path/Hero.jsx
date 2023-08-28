import Button from "components/Button";

export default function Hero() {

    const showMustPicked = () => {

    }

    return (
        <section className="container pt-5 pb-5 mb-5">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-6 col-sm-12 pr-5" style={{width: 500}}>
                    <h1 className="font-weigh-bold line-height-1 mb-3">
                        Belanja Sepatu Yang Kece & Menarik, <br />
                        Toko.RM Solusinya
                    </h1>
                    <p className="font-weight-laight text-gray-500 w-75">
                        Toko.RM Menyediakan banyak sekali pilihan sepatu yang bagus & menarik.
                        bukan hanya itu Toko ini juga menjamin kualitas sepatunya.
                    </p>
                    <Button className="btn px-5" hashShadow isPrimary onClick={showMustPicked}>
                        Beli Sekarang
                    </Button>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <img className="img-fluid w-75 mt-4" src={`./images/baner.png`} alt="baner" />
                </div>
            </div>
        </section>
    )
}