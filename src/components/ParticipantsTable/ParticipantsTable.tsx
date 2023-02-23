import './ParticipantsTable.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { BigTextCutter } from '../../utils/helpers';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
const ParticipantsTable = () => {
  const participants = useSelector((state:RootState) => state.participiantsData.participants)
  const client = useSelector((state:RootState) => state.participiantsData.user)
  const goByToPersonalPage = (id:string) => {
    console.log(id)
  }
  return (
    <div className='participants_table'>
      {client.username && 
        <TableContainer className='table_container'>
        <div className='table_body'>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <h3 className='table_head_title'>NAME</h3>
                </TableCell>
                <TableCell>
                  <h3 className='table_head_title'>EMAIL</h3>
                </TableCell>
                <TableCell>
                  <h3 className='table_head_title'>WALLET</h3>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                participants.map((row) => {
                  return (
                    <TableRow 
                      key={row.id} 
                      className='table_row_data'
                      onClick={() => goByToPersonalPage(row.address)} 
                      >
                      <TableCell className='table_row_data_cell'>
                        {row.username}
                      </TableCell>
                      <TableCell className='table_row_data_cell'>
                        {row.email}
                      </TableCell>
                      <TableCell className='table_row_data_cell'>
                        {BigTextCutter(row.address, 19)}
                      </TableCell>
                    </TableRow>
                  )
                })
              }
            </TableBody>
          </Table>
        </div>
      </TableContainer>
      }
    </div>
  )
}

export default ParticipantsTable