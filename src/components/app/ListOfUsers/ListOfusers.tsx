import { Badge, Card, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Title } from '@tremor/react'

export function ListOfUsers() {
  return (
    <Card>
      <Title>
        Usuarios
        <Badge style={{ marginLeft: '8px' }}>Name</Badge>
      </Title>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell> Id </TableHeaderCell>
            <TableHeaderCell> Nombre </TableHeaderCell>
            <TableHeaderCell> Email </TableHeaderCell>
            <TableHeaderCell> Acciones </TableHeaderCell>
          </TableRow>
        </TableHead>

        <TableBody>
          <TableRow>
            <TableCell></TableCell>
            <TableCell style={{ display: 'flex', alignItems: 'center' }}></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Card>
  )
}
