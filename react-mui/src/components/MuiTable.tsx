import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const MuiTable = () => {
    const tableData = [{
        "id": 1,
        "first_name": "Winny",
        "last_name": "Shutt",
        "email": "wshutt0@about.me",
        "gender": "Male",
        "ip_address": "124.72.45.93"
      }, {
        "id": 2,
        "first_name": "Frederigo",
        "last_name": "Lermit",
        "email": "flermit1@hc360.com",
        "gender": "Male",
        "ip_address": "177.66.111.111"
      }, {
        "id": 3,
        "first_name": "Kendell",
        "last_name": "McGrady",
        "email": "kmcgrady2@about.com",
        "gender": "Male",
        "ip_address": "51.88.58.204"
      }, {
        "id": 4,
        "first_name": "Joelle",
        "last_name": "Saura",
        "email": "jsaura3@wordpress.org",
        "gender": "Female",
        "ip_address": "151.139.237.36"
      }, {
        "id": 5,
        "first_name": "Valerye",
        "last_name": "Putton",
        "email": "vputton4@paypal.com",
        "gender": "Female",
        "ip_address": "12.192.17.3"
      }, {
        "id": 6,
        "first_name": "Goldie",
        "last_name": "Sneddon",
        "email": "gsneddon5@jimdo.com",
        "gender": "Female",
        "ip_address": "39.110.27.47"
      }, {
        "id": 7,
        "first_name": "Caddric",
        "last_name": "Grimoldby",
        "email": "cgrimoldby6@nasa.gov",
        "gender": "Male",
        "ip_address": "171.197.242.61"
      }, {
        "id": 8,
        "first_name": "Omero",
        "last_name": "Flieg",
        "email": "oflieg7@gravatar.com",
        "gender": "Male",
        "ip_address": "116.32.5.205"
      }, {
        "id": 9,
        "first_name": "Lewiss",
        "last_name": "Gohn",
        "email": "lgohn8@xrea.com",
        "gender": "Male",
        "ip_address": "49.78.246.213"
      }, {
        "id": 10,
        "first_name": "Kaela",
        "last_name": "Arnopp",
        "email": "karnopp9@webs.com",
        "gender": "Female",
        "ip_address": "220.154.32.70"
      }]
      

  return (
    <TableContainer component={Paper} sx={{height: '269px'}}>
        <Table aria-label='simple table' stickyHeader>
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell align='center'>Email</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    tableData.map((row) => (
                        <TableRow key={row.id} sx={{'&:last-child td, &:last-child th': { border: 0 }}}>
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.first_name}</TableCell>
                            <TableCell>{row.last_name}</TableCell>
                            <TableCell align='center'>{row.email}</TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    </TableContainer>
  )
}

export default MuiTable
