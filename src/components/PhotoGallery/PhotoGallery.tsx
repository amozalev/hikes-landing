import * as S from './PhotoGallery.Styled';

export type GalleryPhotoType = {
    image: string;
    description: string;
};

const PhotoGallery = ({ image, description }: GalleryPhotoType) => {
    return (
        <S.StyledPhotoGallery>
            <figure className="card">
                <img className="image" src={image} alt={description} />
            </figure>
        </S.StyledPhotoGallery>
    );
};

export default PhotoGallery;
