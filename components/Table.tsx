// import React from 'react'

// const Table = () => {
//   return (
//     <div>

//     </div>
//   )
// }

// export default Table

import React from 'react';

interface LinksType {
    id: number;
    table: string;
};

const Table = () => {
    const data = [
        {
            id: 1,
            type: 'Shoe',
            model: 'Air Jordan',
            brand: 'Nike',
            size: '40',
            color: 'Black & White',
            price: 135,
            stock: 650,
            availability: 'available',
            provider_name: 'Caliope',
            provider_cell_phone: 3153123663,
            provider_email: 'contact@caliope.co'
        },
        {
            id: 2,
            type: 'Shirt',
            model: 'Sports',
            brand: 'rebook',
            size: 's',
            color: 'Grey',
            price: 16,
            stock: 200,
            availability: 'unavailable',
            provider_name: 'Fibras y Telas S.A.S',
            provider_cell_phone: 3008083396,
            provider_email: 'fytsas@fribrasytelassas.com'
        },
        // Agrega más elementos de prueba aquí

    ];

    const links: LinksType[] = [
        { id: 1, table: 'product' },
        { id: 2, table: 'brand' },
        { id: 3, table: 'sale' },
        { id: 4, table: 'client' },
        { id: 5, table: 'provider' },
        { id: 6, table: 'provider' },
        { id: 7, table: 'provider' },
        { id: 8, table: 'provider' },
        { id: 9, table: 'provider' },
        { id: 10, table: 'provider' },
        { id: 11, table: 'provider' },
        { id: 12, table: 'provider' },
    ];

    return (
        <div className="flex items-center justify-center m-auto">
            <main className="">
                <div className="flex flex-col">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead>
                            <tr>
                                {
                                    links.map(({ id, table }: LinksType) => {
                                        return (
                                            <th className="py-3 px-6 bg-Blue text-white font-bold uppercase tracking-wider">{table}</th>
                                        )
                                    })
                                }
                                <th className="py-3 px-6 bg-Blue text-white font-bold uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {data.map((item, index) => {
                                let count = 0;
                                count = + 1;

                                return (
                                    <tr key={index}>
                                        <td className="py-4 px-6 border-b border-gray-200">{item.id}</td>
                                        <td className="py-4 px-6 border-b border-gray-200">{item.type}</td>
                                    </tr>
                                )
                            })
                            }
                            <td className="py-4 px-6 border-b border-gray-200">
                                <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Edit</button>
                                <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded" >Delete</button>
                            </td>
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    )
}

export default Table;