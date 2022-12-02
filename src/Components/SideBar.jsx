import styles from '../Components/SideBar.module.css'

export function SideBar(){

    return(
        <aside className={styles.SideBar}>
         <img className={styles.cover} src="https://plus.unsplash.com/premium_photo-1669087866031-d63345007809?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fENEd3V3WEpBYkV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
         <div className={styles.profile}>
            <strong>Felipe</strong>
            <span>Web Developer</span>

         </div>
         <footer>
            <a href="#">
                Edtar meu perfil
            </a>
         </footer>
        </aside>
    )
}