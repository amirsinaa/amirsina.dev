import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

export const theme = extendTheme({
  fonts: {
    body: `'Open Sans', sans-serif`
  },
  styles: {
    global: (props) => ({
      body: {
        color: mode('gray.600', 'whiteAlpha.800')(props),
        bg: mode('bodyBackground.100', 'bodyBackground.900')(props),
        fontSize: '1.2em',
      },
      a: {
        color: mode('yellowish.100', 'yellowish.100')(props),
        transition: 'color 0.25s',
        transitionTimingFunction: 'ease-out',
        fontWeight: '500',
      },
      span: {
        transition: 'color 0.25s, background 0.25s',
        transitionTimingFunction: 'ease-out',
      }
    }),
  },
  components: {
    Popover: {
      parts: ['popper'],
      baseStyle: props => ({
        popper: {
          zIndex: 10,
          maxW: 'xs',
          w: props.width,
        },
      }),
    },
    Button: {
      baseStyle: {
        fontWeight: '500',
        rounded: 'xl',
      },
    },
    Tag: {
      baseStyle: {
        rounded: 'lg',
      },
    },
    Link: {
      baseStyle: {
        fontWeight: 'inherit',
        _hover: {
          textDecoration: 'none',
        },
      },
      variants: {
        text: {
          color: 'yellowish.100',
          transition: 'color 0.15s',
          transitionTimingFunction: 'ease-out',
          fontWeight: '500',
        },
      },
    },
  },
  colors: {
    //800 is color
    //100 is background color
    transparent: 'transparent',
    black: {
      100: '#000',
      200: '#ffffff',
      800: '#ffffff'
    },
    bodyBackground: {
      100: '#ffffff',
      900: '#000000'
    },
    deepBlueSea: {
      100: '#14213d'
    },
    yellowish: {
      100: '#fca311',
    },
    maroon: {
      100: '#800000',
      200: '#800000',
      800: '#ffffff'
    },
    skygreen: {
      100: '#00bfff',
      200: '#00bfff',
      800: '#ffffff'
    },
    dirtyskyblue: {
      100: '#3178c6',
      200: '#3178c6',
      800: '#ffffff'
    },
    reactblue: {
      100: '#61dafb',
      200: '#61dafb',
      800: '#ffffff'
    },
    red: {
      100: '#FF0000',
      200: '#FF0000',
      800: '#ffffff'
    },
    seagreen: {
      100: '#2e8b57',
      200: '#2e8b57',
      800: '#ffffff'
    },
    darkgreen: {
      100: '#053500',
      200: '#053500',
      800: '#ffffff'
    },
    orangered: {
      100: '#ff4500',
      200: '#ff4500',
      800: '#ffffff'
    },
    gold: {
      100: '#ffd700',
      200: '#ffd700',
      800: '#ffffff'
    },
    chakraUI: {
      100: '#319795',
      200: '#319795',
      800: '#ffffff'
    },
    darkorange: {
      100: '#ff8c00',
      200: '#ff8c00',
      800: '#ffffff'
    },
    hotpink: {
      100: '#ff69b4',
      200: '#ff69b4',
      800: '#ffffff'
    },
    lightsalmon: {
      100: '#ffa07a',
      200: '#ffa07a',
      800: '#ffffff'
    },
    greenviolet: {
      100: '#8a2be2',
      200: '#8a2be2',
      800: '#ffffff'
    },
  }
})


export const assignTechTagColor = type => {
  type = type.name.toLowerCase()
  switch (type) {
    case 'angularjs':
      return 'red'
    case 'gulpjs':
      return 'maroon'
    case 'prestashop':
      return 'black'
    case 'yii2':
      return 'skygreen'
    case 'vuejs':
      return 'seagreen'
    case 'laravel':
      return 'orangered'
    case 'javascript vanilla':
      return 'gold'
    case 'sass':
      return 'hotpink'
    case 'html5':
      return 'darkorange'
    case 'react':
      return 'reactblue'
    case 'typescript':
      return 'dirtyskyblue'
    case 'chakraui':
      return 'chakraUI'
    case 'nextjs':
      return 'black'
    case 'gruntjs':
      return 'lightsalmon'
    case 'bootstrap':
      return 'greenviolet'
    default:
  }
}