import ColoredSection from '../../Section/ColoredSection';
import Article from '../../Article/Article';
import TinySlider from 'tiny-slider-react';
import { Button } from '../../Button/Button';
import PhotoGallery, {
    GalleryPhotoType,
} from '../../PhotoGallery/PhotoGallery';
import SubscriptionForm from '../../NewsSubscriptionForm/SubscriptionForm';

type Props = {
    photos: GalleryPhotoType[];
    tinySliderSettings: any;
};

const GallerySection = ({ photos, tinySliderSettings }: Props) => {
    return (
        <ColoredSection description="фото-отчет" title="Делимся впечатлениями">
            <Article marginTop={32} gap={32}>
                <TinySlider settings={tinySliderSettings}>
                    {photos.map(({ ...props }, index) => (
                        <PhotoGallery key={index} {...props} />
                    ))}
                </TinySlider>
                <Button
                    title="Наш Pinterest"
                    color="#FDFDFD"
                    backgroundColor="#1A3E3E"
                />
                <SubscriptionForm />
            </Article>
        </ColoredSection>
    );
};

export default GallerySection;
