import { useState } from "react"
import './Banner.css';

const images = [
    {
        src: '/banners/imagem1.jpeg',
        alt: 'Promoção smartphone',
        link: 'promo1'
    },
    {
        src: '/banners/imagem2.jpeg',
        alt: 'menores preços',
        link: 'preços'

    },
    {
        src: '/banners/imagem3.jpeg',
        alt: 'Ofertas imperdivéis',
        link: 'Ofertas'
    }
];

function Banner() {
    const [currentIndex, setCurretIndex] = useState(0);
    const nextImage = () => {
        setCurretIndex((prevIndex) => (prevIndex + 1) % images.length);

    };
    const prevImage = () => {
        setCurretIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };


return (
    <div className="banner-container">
        <button className="banner-button prev" onClick={prevImage}>
            &lt;
        </button>
        <div className="banner-image">
            <a href={images[currentIndex].link}>
                <img
                    src={images[currentIndex].src}
                    alt={images[currentIndex].alt}
                />
            </a>
        </div>
        <button className="banner-button next" onClick={nextImage}>
            &gt;
        </button>
    </div>
)
};
export default Banner;