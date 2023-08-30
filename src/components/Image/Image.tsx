export type ImageType = {
    image: string;
    imageWebp: string;
    alt?: string;
    className?: string;
};

const Image = ({ imageWebp, image, alt, className }: ImageType) => {
    return (
        <picture className={className}>
            <source srcSet={imageWebp} type="image/webp" />
            <img className={className} src={image} alt={alt} />
        </picture>
    );
};

export default Image;
