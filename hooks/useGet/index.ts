function useGet() {
    const data = [
        {
            id: 1,
            table: 'product',
            data_table: [
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
                }
            ]
        },
        {
            id: 2,
            table: 'brand',
            data_table: [
                { id: 1, brand: 'Nike' },
                { id: 2, brand: 'Rebook' },
                { id: 3, brand: 'Adidas' },
                { id: 4, brand: 'Puma' }
            ]
        },
        {
            id: 3,
            table: 'sale',
            data_table: [
                {
                    id: 1,
                    client_dni: 1021634444,
                    name: 'Catalina',
                    product_id: 1,
                    product_type: 'Shoe',
                    product_model: 'Air Jordan',
                    total_price: 140,
                    form_of_payment: 'Debit Card',
                    created_at: '2022-04-01 15:23:23'
                },
                {
                    id: 2,
                    client_dni: 1203128392,
                    name: 'Jesus',
                    product_id: 2,
                    product_type: 'Shirt',
                    product_model: 'Sports',
                    total_price: 26,
                    form_of_payment: 'Cash',
                    created_at: '2023-01-03 09:23:21'
                },
                {
                    id: 3,
                    client_dni: 1231231231,
                    name: 'Oriana',
                    product_id: 1,
                    product_type: 'Shoe',
                    product_model: 'Air Jordan',
                    total_price: 145,
                    form_of_payment: 'Credit Card',
                    created_at: '2021-06-03 17:23:21'
                }
            ]
        },
        {
            id: 4,
            table: 'client',
            data_table: [
                {
                    dni: 1021634444,
                    name: 'Catalina',
                    last_name: 'Forero Suarez',
                    postal_code: null,
                    location: 'Villa Campestre',
                    addraddresse: 'Calle 3B #Transversal 3B - 275',
                    landline: '066943822',
                    cell_phone: 3168603691,
                    email: 'catalinaforerosuarez@gmail.com'
                },
                {
                    dni: 1231231231,
                    name: 'Oriana',
                    last_name: 'Giraldo Gelvez',
                    postal_code: null,
                    location: 'Altos de Miramar',
                    addraddresse: 'Carrera 64 #99 - 100',
                    landline: 337190992,
                    cell_phone: 3206596631,
                    email: 'orianagelvez67@gmail.com'
                },
                {
                    dni: 1203128392,
                    name: 'Jesus',
                    last_name: 'Barros',
                    postal_code: 2938,
                    location: 'Miramar',
                    addraddresse: 'Calle 34 #37 - 233',
                    landline: 12349347,
                    cell_phone: 3003225573,
                    email: 'jesus.barros.dev@gmail.com'
                }
            ]
        },
        {
            id: 5,
            table: 'provider',
            data_table: [
                {
                    id: 1,
                    full_name: 'Fibras y Telas S.A.S',
                    location: 'Miramar',
                    address: 'Calle 74 #46',
                    landline: 203488732,
                    cell_phone: 3008083396,
                    email: 'fytsas@fribrasytelassas.com'
                },
                {
                    id: 2,
                    full_name: 'Caliope',
                    location: 'Los Andes',
                    address: 'Calle 82 #23',
                    landline: 1204923212,
                    cell_phone: 3153123663,
                    email: 'contact@caliope.co'
                },
            ]
        }
    ]
    return (data)
}

export default useGet;