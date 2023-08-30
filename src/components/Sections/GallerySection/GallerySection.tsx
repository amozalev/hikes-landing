import * as S from './GallerySectionStyled';
import ColoredSection from '../../Section/ColoredSection';
import TinySlider from 'tiny-slider-react';
import { Button } from '../../Button/Button';
import SliderPhotoGallery, {
    GalleryPhotoType,
} from '../../PhotoGallery/SliderPhotoGallery';
import SubscriptionForm from '../../NewsSubscriptionForm/SubscriptionForm';
import SectionHeader from '../../SectionHeader/SectionHeader';
import Image from '../../Image/Image';

type Props = {
    photos: GalleryPhotoType[];
    tinySliderSettings: any;
};

const GallerySection = ({ photos, tinySliderSettings }: Props) => {
    return (
        <ColoredSection>
            <S.GallerySectionStyled>
                <SectionHeader
                    description="фото-отчет"
                    title="Делимся впечатлениями"
                />
                <div className="gallery">
                    {photos.map(({ image, imageWebp, description }, index) => (
                        <Image
                            key={index}
                            className={`gallery-image grid-image-${index}`}
                            imageWebp={imageWebp}
                            image={image}
                            alt={description}
                        />
                    ))}
                </div>
                <div className="slider">
                    <TinySlider settings={tinySliderSettings}>
                        {photos.map(({ ...props }, index) => (
                            <SliderPhotoGallery key={index} {...props} />
                        ))}
                    </TinySlider>
                </div>
                <div className="button-outer">
                    <Button
                        title="Наш Pinterest"
                        color="#FDFDFD"
                        backgroundColor="#1A3E3E"
                    />
                </div>
                <SubscriptionForm />
            </S.GallerySectionStyled>
        </ColoredSection>
    );
};

export default GallerySection;
