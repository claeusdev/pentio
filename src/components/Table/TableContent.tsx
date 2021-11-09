import {
  Badge,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import { Payroll } from 'src/utils/types';
import { badgeEnum } from 'src/utils';
import User from '../User/User';


export const columns = [
  {
    Header: "Employee ID",
    accessor: "Employee ID",
    Cell: function MemberCell(data: any) {
      return <User user={data} />;
    },
  },
  {
    Header: "Employee Name",
    accessor: "Employee Name",
  },
  {
    Header: "Team",
    accessor: "Departments",
    Cell: function StatusCell(data: any) {
      return (
        <Badge fontSize="xs" colorScheme={badgeEnum[data]}>
          {data}
        </Badge>
      );
    },
  },
  {
    Header: "Hours Worked",
    accessor: "Hours Worked",
  },
  {
    Header: "Base Salary",
    accessor: "Base Salary",
    Cell: function StatusCell(data: any) {
      return (
        <span>
          ${data}
        </span>
      );
    },
  },
  {
    Header: "Bonus",
    accessor: "Bonus",
  },
];

interface TableContentProps {
  data: Payroll[]
}
export const TableContent = ({ data} : TableContentProps) => {
  return (
    <Table my="8" borderWidth="1px" fontSize="sm">
      <Thead bg={mode('gray.50', 'gray.800')}>
        <Tr>
          {columns.map((column, index) => (
            <Th whiteSpace="nowrap" scope="col" key={index}>
              {column.Header}
            </Th>
          ))}
          <Th />
        </Tr>
      </Thead>
      <Tbody>
        {data.map((row, index) => (
          <Tr key={index}>
            {columns.map((column, index) => {
              const cell = row[column.accessor as keyof typeof row]
              const element = column.Cell?.(cell) ?? cell
              return (
                <Td whiteSpace="nowrap" key={index}>
                  {element}
                </Td>
              )
            })}
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}
