import ImageCard from "../ImageCard/ImageCard"
import css from "./ImageGallery.module.css"
export default function ImageGallery({ galleryPhotos, handleImgClick }) {
    return (
        <ul className={css.gallery}>
            {galleryPhotos.map(({ id, alt_description, urls}) => {
                return (
                    <li key={id}>
                        <ImageCard alt={alt_description} image={urls} handleImgClick={handleImgClick} />
                    </li>
                )
            })}
        </ul>
    )
}