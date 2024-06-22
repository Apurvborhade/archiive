import localFont from 'next/font/local'
import { Inter, Monda } from 'next/font/google'

export const inter = Inter({ subsets: ['latin'] })
export const FreeSans = localFont({ src: "../fonts/FreeSansBold.ttf" });
export const neueHass = localFont({
    src: [
        {
            path: '../fonts/neue hass/NeueHaasDisplayRoman.ttf',
            weight: '400',
            style: 'roman'
        },
        {
            path: '../fonts/neue hass/NeueHaasDisplayMediu.ttf',
            weight: '500',
            style: 'medium'
        },

    ]
});
export const Helvetica_Bold = localFont({ src: "../fonts/helvetica/Helvetica-Bold.ttf" });
export const HelveticaReg = localFont({ src: "../fonts/helvetica/Helvetica.ttf" });
export const Helvetica_Now = localFont({ src: "../fonts/HelveticaNowDisplay-Regular.ttf" });
export const monda = Monda({ subsets: ['latin'], weight: "400" })