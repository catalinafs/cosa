import Link from 'next/link';
import React from 'react';
import StoreIcon from '@/public/assets/icons/StoreIcon.js';
import useCapitalized from '@/hooks/useCapitalize';
import useGet from '@/hooks/useGet';
import { data } from '@/pages/api/hello';

interface NavbarProps {
    infoHijo: any;
}

interface LinksType {
    id: number;
    table: string;
};

const Navbar = ({ infoHijo }: NavbarProps) => {
    const links: LinksType[] = [
        { id: 1, table: 'product' },
        { id: 2, table: 'brand' },
        { id: 3, table: 'sale' },
        { id: 4, table: 'client' },
        { id: 5, table: 'provider' }
    ];

    // infoHijo(data)

    return (
        <header className='w-full'>
            <nav className='w-full flex items-center justify-between py-3 px-11 bg-WhiteDashed'>
                <Link href='/home' className='max-w-fit flex items-center gap-2'>
                    <StoreIcon width={48} height={48} className='block' />
                    <h1 className='font-bold text-2xl'>Product Store</h1>
                </Link>

                <ul className='flex gap-8 text-lg'>
                    {
                        links.map(({ id, table }: LinksType) => {
                            return (
                                <li key={id}>
                                    <button onClick={() => { infoHijo(data) }} className='NavbarButton'>
                                        {useCapitalized(table)}
                                    </button>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;