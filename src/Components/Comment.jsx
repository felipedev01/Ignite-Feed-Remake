import styles from '../Components/Comment.module.css'

export function Comment(){
    return(
        
        <div className={styles.comment}>
        <img className={styles.Avatar}src="https://avatars.githubusercontent.com/u/81122606?v=4" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                    <div className={styles.authorInfo}>
                    <strong>Felipe</strong>
                    <span>Web Developer</span>
                    </div>
                    <button>deletar</button>
                    </header>
                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                  
                </div>
                <footer>Aplaudir</footer>
            </div>
        
        </div>
    )
}