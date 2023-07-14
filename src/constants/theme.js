import lightBg from '../pictures/lightBg.jpg'; 
import darkBg from '../pictures/darkBgr.jpg';

export const lightTheme = Object.freeze({
    fonts: {
        primary: 'Poppins, sans-serif',
        secondary: 'Lato, sans-serif',
        tertiary: 'Inter, sans-serif',
        quaternary: 'Helvetica, sans-serif',
    },
    colors: {
        primaryDarkText: '#181f29', //dark blue, almost black//
        secondaryDarkText: '#3e4462', //blue-dark gray//
        tertiaryDarkText: '#2D3D4E', //dark blue//
        quaternaryDarkText: '#FAFAFA', //gray//

        blackText: '#000000',
    
        whiteText: '#ffffff',

        primaryLightText: '#FAFAFA',
        secondaryLightText: '#e0e0e0', //greyish white//
        tertiaryLightText: '#BDBDBD', //light gray//
        modal: '#ffffff',

        normalDark: '#8CBDB9', //bright dark blue //
        orangeAccent: '#FFBB98',
        lightBlue: '#B3DEE5',
        secondaryOrange: '#ed9464',

        greenValidation: '#3CBC81',
        yellowValidation: '#F6C23E',
        redValidation: '#E74A3B',

        lightBackground: '#edf1f5',
        whiteBackground: '#ffffff',
        primaryDarkBackground: '#1E1F28',
        secondaryDarkBackground: '#22252A',

    },
  
    images: {
        background: lightBg,
    },
}); 

export const darkTheme = Object.freeze({
    fonts: {
        primary: 'Poppins, sans-serif',
        secondary: 'Lato, sans-serif',
        tertiary: 'Inter, sans-serif',
        quaternary: 'Helvetica, sans-serif',
    },
    colors: {
        primaryDarkText: '#FAFAFA',
        secondaryDarkText: '#FAFAFA',
        tertiaryDarkText: '#FAFAFA',
        quaternaryDarkText: '#3e4462',

        blackText: '#FAFAFA',
        whiteText: '#ffffff',

        primaryLightText: '#FAFAFA',
        secondaryLightText: '#e0e0e0',
        tertiaryLightText: '#BDBDBD',
        modal: '#181f29',


        normalDark: '#617ec2', //light blue//
        orangeAccent: '#FBE0C3',
        lightBlue: '#B3DEE5',
        secondaryOrange: '#FBE0C3',

        greenValidation: '#3CBC81',
        yellowValidation: '#F6C23E',
        redValidation: '#E74A3B',

        lightBackground: '#1E1F28',
        whiteBackground: '#2A2C36',
        primaryDarkBackground: '#1E1F28',
        primaryGreenBackground: '#1E1F28',
        secondaryDarkBackground: '#8BAA36',

    },
    images: {
        background: darkBg,
    },
}); 

export const theme = {
  light: lightTheme,
  dark: darkTheme,
};