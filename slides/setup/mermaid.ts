import { defineMermaidSetup } from '@slidev/types'

// Diagrams are drawn in the moon palette so they sit on the slide
// background rather than on a white box like the imported images.
export default defineMermaidSetup(() => ({
  theme: 'base',
  themeVariables: {
    background: '#002b36',
    fontFamily: 'Lato, sans-serif',
    fontSize: '20px',
    primaryColor: '#073642',
    primaryTextColor: '#eee8d5',
    primaryBorderColor: '#93a1a1',
    lineColor: '#93a1a1',
    secondaryColor: '#073642',
    tertiaryColor: '#002b36',
    clusterBkg: 'transparent',
    clusterBorder: 'transparent',
    edgeLabelBackground: '#002b36',
  },
  flowchart: { curve: 'basis', padding: 16, nodeSpacing: 60, rankSpacing: 90 },
}))
