
import styles from './Header.module.css'
import igniteLogo from '../assets/Ignite simbol.svg'

console.log(igniteLogo)

export function Header(){

    return(

        <header className={styles.header}>
              <strong >Ignite Feed</strong>

        </header>
        
    )

}