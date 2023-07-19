import { useState } from "react"
import Table from '@/components/Table'

interface DataType {
  table: string;
  data_table: any;
}

export default function Home({ data, setData }: any) {
  return (
    <main
      className={`flex border border-WhiteDashed flex-col items-center justify-between pt-6 bg-MainColor
      fullPantalla`}
    >
      <h1>Product Stock</h1>
      <Table />
    </main>
  )
}

// {data.map(({ data_table }: DataType) => {
//   let info = data_table[0]
//   console.log(info.postal_code)

//   return (
//     <p>
//       {info.id}
//       {info.name}
//       {info.full_name}
//     </p>
//   )
// })}

// {
//  {`${table}, info al instante: ${data[0]}`}
//   // data.map(({}))
// }