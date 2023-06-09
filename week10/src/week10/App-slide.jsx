import { Box, FormControlLabel, Slide, Switch } from "@mui/material"

export default function App() {
    
    return (
        <Box sx={{ width: `calc(100px + 16px)` }}>
  <FormControlLabel
    control={<Switch checked={checked} onChange={handleChange} />}
    label="Show"
  />
  <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
    {icon}
  </Slide>
</Box>
    )
}