import styles from '../Components/Comment.module.css'
import {Trash} from 'phosphor-react'
import {ThumbsUp} from 'phosphor-react'
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
                    <Trash size={20} className={styles.trash}/>
                    </header>
                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                  
                </div>  
                <ThumbsUp size={32} />
                <footer>Aplaudir</footer>
            </div>
        
        </div>
    )
}