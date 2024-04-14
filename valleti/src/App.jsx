import './App.css'
import Logo from './assets/val-logo.png'
import {Box, Typography } from '@mui/material'
import { createTheme} from '@mui/material/styles'
import { ThemeProvider } from '@emotion/react'
import Header from './Header'
import InstagramIcon from '@mui/icons-material/Instagram'

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat'
  },
})

function App() {

  return (
<ThemeProvider theme ={theme}>
    <Box>
     <Header />
     <Box>
        <img src={Logo} className= 'logo' alt='valleti logo'/>
      </Box>
      <Box>
        <Typography>
          Este sitio web está en fase de desarrollo.
          Sigueme en
        </Typography>
       <a href= 'https://www.instagram.com/valleti/' target="_blank" className='insta'><InstagramIcon sx= {{
          marginTop: '1rem'
        }}></InstagramIcon>
        </a>
      </Box>
    </Box>
    </ThemeProvider>
  )
}

export default App
