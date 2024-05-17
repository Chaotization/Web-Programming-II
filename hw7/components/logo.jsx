import Image from 'next/image';
import Link from 'next/link';
import logoImg from '../public/img/logo.jpg'

const Logo = () => {
    return (
        <div className="w-full flex justify-center" >
            <Link href="/">
                <Image src={logoImg} alt="Logo" width={300} height={50} />
            </Link>
        </div>
    );
}

export default Logo;
