import localFont from 'next/font/local'
import { Archivo, Inter, Monda, Mulish, Poppins } from 'next/font/google'

export const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500', '600']
})
export const poppins = Poppins({ subsets: ['latin'], weight: "500" })
export const archivo = Archivo({ subsets: ['latin'], weight: "300" })
export const FreeSans = localFont({ src: "../fonts/FreeSansBold.ttf" });
export const monda = Monda({ subsets: ['latin'], weight: "400" });
export const neueHass = Inter({ subsets: ['latin'], weight: ["400", "500"] });
export const neutralFace = localFont({
    src: [
        {
            path: '../fonts/NeutralFace.otf',
            weight: '200',
            style: 'roman'
        },
        {
            path: '../fonts/NeutralFace-Bold.otf',
            weight: '400',
            style: 'bold'
        },

    ]
});


// export const neueHass = localFont({
//     src: [
//         {
//             path: '../fonts/neue hass/NeueHaasDisplayRoman.ttf',
//             weight: '400',
//             style: 'roman'
//         },
//         {
//             path: '../fonts/neue hass/NeueHaasDisplayMediu.ttf',
//             weight: '500',
//             style: 'medium'
//         },

//     ]
// });




