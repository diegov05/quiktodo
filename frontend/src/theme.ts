// theme.ts

// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'

// 3. extend the theme
const theme = extendTheme({
    config: {
        initialColorMode: 'light',
        useSystemColorMode: true,
    },
    colors: {
        "bg-color": "#FAFFFC",
        "text-color": "#000F06",
        "accent-color": "#30FD7B",
        "button-primary-color": "#49FD8B",
        "button-secondary-color": "#E1FFEC"
    }
})

export default theme