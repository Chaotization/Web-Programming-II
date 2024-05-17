import Link from 'next/link';

export default function Navigation() {
    return (
        <ul className='navClass center'>
            <li className='nav'>
                <Link href='/'>Home</Link>
            </li>
            <li className='nav'>
                <Link href='/launches'>Launches</Link>
            </li>
            <li className='nav'>
                <Link href='/payloads'>Payloads</Link>
            </li>
            <li className='nav'>
                <Link href='/cores'>Cores</Link>
            </li>
            <li className='nav'>
                <Link href='/rockets'>Rockets</Link>
            </li>
            <li className='nav'>
                <Link href='/ships'>Ships</Link>
            </li>
            <li className='nav'>
                <Link href='/launchpads'>Launchpads</Link>
            </li>
        </ul>
    );
}