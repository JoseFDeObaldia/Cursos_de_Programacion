import Link from "next/link";
import Image from 'next/image';

const Chanchitos2 = () => {
    return(
        <>
            <p>Chanchitos Tristes 2</p>
            <Link href="/">Inicio</Link>

            <div>
                <Image src='/coffee.jpg' width={400} height={400} />
            </div>
            <Image src='/background.jpg' layout="fill" />
        </>
    );
}
export default Chanchitos2;