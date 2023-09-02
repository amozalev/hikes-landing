import imagemin from 'imagemin';
import webp from 'imagemin-webp';

await imagemin(['src/assets/images/*.{jpg,png}'], {
    destination: 'src/assets/images',
    plugins: [webp({ quality: 60 })],
});
