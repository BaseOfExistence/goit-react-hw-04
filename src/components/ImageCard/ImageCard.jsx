import css from "./ImageCard.module.css"

export default function ImageCard({ alt, image, handleImgClick }) {
    return (
        <div className={css.photo}>
            <img onClick={handleImgClick} className={css.item} src={image.small} alt={alt} data-modal={image.regular} />
        </div>
    )
}