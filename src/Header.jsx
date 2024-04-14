import { Box, Typography } from "@mui/material"
import React from "react"

const Header = () => {
  return (
    <Box sx ={{marginTop: '1rem', padding: '1rem', maxWidth: '100%', overflow: 'hidden'}}>
      <Typography sx =
      {{fontSize: '2rem', 
      textAlign: 'center', 
      '@media (max-with:444px)': {
        fontSize: '1.5rem'
      }
      }}>
        valleti
      </Typography>
    </Box>
  )
}
export default Header