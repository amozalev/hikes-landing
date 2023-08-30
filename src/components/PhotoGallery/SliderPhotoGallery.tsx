import * as S from './SliderPhotoGallery.Styled';
import Image, { ImageType } from '../Image/Image';

export type GalleryPhotoType = {
    description: string;
} & ImageType;

const SliderPhotoGallery = ({
    image,
    imageWebp,
    description,
}: GalleryPhotoType) => {
    return (
        <S.StyledSliderPhotoGallery>
            <figure className="card">
                <Image
                    className="image"
                    image={image}
                    imageWebp={imageWebp}
                    alt={description}
                />
            </figure>
        </S.StyledSliderPhotoGallery>
    );
};

export default SliderPhotoGallery;
