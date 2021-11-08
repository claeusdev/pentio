import { Box } from '@chakra-ui/react'
import * as React from 'react'
import { Payroll } from 'src/App'
import { TableContent } from './TableContent'
import { TablePagination } from './TablePagination'

interface TableProps {
  data: Payroll[]
}
const Table = ({ data }: TableProps) => {
  return (
    <Box as="section" py="12">
      <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }}>
        <Box overflowX="auto">
          <TableContent data={data} />
          <TablePagination />
        </Box>
      </Box>
    </Box>
  )
}

export default Table;
