import React from 'react'

import * as S from './styles'

interface RowProps {
  id: number
  label: string
  value: string
}
interface TableProps {
  rows: RowProps[]
}

const Table = ({ rows }: TableProps) => (
  <S.Table>
    {rows.map((item) => (
      <S.Row key={item.id}>
        <S.CellLeft>{item.label}</S.CellLeft>
        <S.CellRight>{item.value}</S.CellRight>
      </S.Row>
    ))}
  </S.Table>
)

export default Table
