import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import React from 'react'

const MuiAccordion = () => {
    const [expanded, setExpanded] = React.useState<string | false>(false)

    const handleOnChange = (isExpanded: boolean, panel: string) => {
        setExpanded(isExpanded ? panel : false)
    }

  return (
    <div>
      <Accordion expanded={ expanded === 'panel1' } onChange={ (event, isExpanded) => handleOnChange(isExpanded, 'panel1') } >
        <AccordionSummary id='panel1-header' aria-controls='panel1-content' expandIcon={<ExpandMoreIcon />}>
            <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic harum adipisci sunt fugit incidunt, nostrum quia, consectetur doloremque aspernatur maxime repellat itaque architecto eligendi quisquam. Nihil velit veritatis, et ea ut ad ipsum qui aliquam. Possimus placeat odio repudiandae exercitationem eum est fugit quia perspiciatis.
            </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={ expanded === 'panel2' } onChange={ (event, isExpanded) => handleOnChange(isExpanded, 'panel2') } >
        <AccordionSummary id='panel2-header' aria-controls='panel2-content' expandIcon={<ExpandMoreIcon />}>
            <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic harum adipisci sunt fugit incidunt, nostrum quia, consectetur doloremque aspernatur maxime repellat itaque architecto eligendi quisquam. Nihil velit veritatis, et ea ut ad ipsum qui aliquam. Possimus placeat odio repudiandae exercitationem eum est fugit quia perspiciatis.
            </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={ expanded === 'panel3' } onChange={ (event, isExpanded) => handleOnChange(isExpanded, 'panel3') }  >
        <AccordionSummary id='panel3-header' aria-controls='panel3-content' expandIcon={<ExpandMoreIcon />}>
            <Typography>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic harum adipisci sunt fugit incidunt, nostrum quia, consectetur doloremque aspernatur maxime repellat itaque architecto eligendi quisquam. Nihil velit veritatis, et ea ut ad ipsum qui aliquam. Possimus placeat odio repudiandae exercitationem eum est fugit quia perspiciatis.
            </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default MuiAccordion
