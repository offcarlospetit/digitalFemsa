import { createTheme } from '@shopify/restyle';
import { StyleProp } from 'react-native';

const palette = {
    purpleLight: '#8C6FF7',
    purplePrimary: '#5A31F4',
    purpleDark: '#3F22AB',

    greenLight: '#56DCBA',
    greenPrimary: '#0ECD9D',
    greenDark: '#0A906E',

    black: '#0B0B0B',
    white: '#F0F2F3',
    pureWhite: '#FFFFFF',

    grayColor: '#9B9898',
    headerBackGround: '#CFD6FF',

    mainBlue: '#334FFA',
};

const theme = createTheme({
    colors: {
        mainBackground: palette.white,
        cardPrimaryBackground: palette.purplePrimary,
        mainBlackText: palette.black,
        ...palette
    },
    spacing: {
        s: 8,
        m: 16,
        l: 24,
        xl: 40,
    },
    breakpoints: {
        phone: 0,
        tablet: 768,
    },
    textVariants: {
        defaults: {
            fontWeight: "400",
            fontSize: 12,
            lineHeight: 16,
            color: 'mainBlackText',
        },
        itemTitle: {
            fontWeight: "800",
            fontSize: 14,
            lineHeight: 19.2,
            color: 'mainBlackText',
        },
        pointAmount: {
            fontWeight: "800",
            fontSize: 16,
            lineHeight: 21.86,
            color: 'mainBlackText',
        },
        itemDate: {
            fontWeight: "400",
            fontSize: 12,
            lineHeight: 16,
            color: 'mainBlackText',
        },
        movementsResumeTitle: {
            fontWeight: "800",
            fontSize: 14,
            lineHeight: 19.12,
            color: 'grayColor',
        },
        mainAmount: {
            fontWeight: "800",
            fontSize: 32,
            lineHeight: 43.71,
            color: 'pureWhite',
        },
        monthMainAmount: {
            fontWeight: "800",
            fontSize: 16,
            lineHeight: 21.86,
            color: 'mainBlackText',
        },
        myPointsTitle: {
            fontWeight: "800",
            fontSize: 14,
            lineHeight: 19.12,
            color: 'grayColor',
        },
        welcomeTitle: {
            fontWeight: "800",
            fontSize: 20,
            lineHeight: 27.32,
            color: 'mainBlackText',
        },
        welcomeSubtitle: {
            fontWeight: "400",
            fontSize: 16,
            lineHeight: 21.86,
            color: 'mainBlackText',
        },
        detailHeaderTitle: {
            fontWeight: "800",
            fontSize: 24,
            lineHeight: 24,
        },
        detailTitle: {
            fontWeight: "800",
            fontSize: 14,
            lineHeight: 19.12,
            color: 'grayColor',
        },
        detailTextDescription: {
            fontWeight: "800",
            fontSize: 16,
            lineHeight: 21.86,
        },
        detailResumeText: {
            fontWeight: "800",
            fontSize: 14,
            lineHeight: 19.12,
            color: 'grayColor',
        },
        detailResumeAmount: {
            fontWeight: "800",
            fontSize: 24,
            lineHeight: 32.78,
        },
        buttonLargeText: {
            fontWeight: "800",
            fontSize: 16,
            lineHeight: 21.86,
            color: 'pureWhite',
        },
        buttonMediumText: {
            fontWeight: "800",
            fontSize: 12,
            lineHeight: 16.39,
            color: 'pureWhite',
        },
    },
});

export type ThemeType = typeof theme;
export default theme;