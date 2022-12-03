import styles from '../Components/Post.module.css'
export function Post(){

   

    return(

        <article>
            <header>
                <div className={styles.Author}>
                <img className={styles.Avatar}src="https://avatars.githubusercontent.com/u/81122606?v=4" />
                <div className={styles.AuthorInfo}>
                    <strong>Felipe</strong>
                    <span>Web Developer</span>
                </div>

                </div>

            </header>
        </article>
        
    )
}