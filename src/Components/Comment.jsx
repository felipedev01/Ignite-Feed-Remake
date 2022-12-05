import styles from '../Components/Comment.module.css'

export function Comment(){
    return(
        <div>
        <div className={styles.CommentBox}>
            
            <div className={styles.CommentContent}>
            <img className={styles.Avatar}src="https://avatars.githubusercontent.com/u/81122606?v=4" />
                <header className={styles.authorInfo}>
                  <strong>Felipe</strong>
                  <span>Web Developer</span>
                </header>
                
            </div>
            <button>deletar</button>
        </div>
        <footer>Aplaudir</footer>
        </div>
    )
}