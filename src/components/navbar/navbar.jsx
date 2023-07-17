import styles from './navbar.module.css'
import { BsCart4 } from 'react-icons/bs'
import Logo from '@/components/logo/logo'
import Input from '../forms/input/input'
import CartButton from '../forms/cartButton/cartButton'

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Logo />
            <div className={styles.search}>
                <Input type="text" placeholder="Buscar" fullWidht />
            </div>
            <CartButton />
        </nav>
    )
}