import * as S from './SliderPhotoGallery.Styled';

export type GalleryPhotoType = {
    image: string;
    description: string;
};

const SliderPhotoGallery = ({ image, description }: GalleryPhotoType) => {
    return (
        <S.StyledSliderPhotoGallery>
            <figure className="card">
                <img className="image" src={image} alt={description} />
            </figure>
        </S.StyledSliderPhotoGallery>
    );
};

export default SliderPhotoGallery;
