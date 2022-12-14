import styles from '../Components/Comment.module.css'
import {Trash} from 'phosphor-react'
import {ThumbsUp} from 'phosphor-react'
import {Avatar} from './Avatar'
export function Comment({content}){

    return(
        
        <div className={styles.comment}>
              <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/81122606?v=4" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                    <div className={styles.authorInfo}>
                    <strong>Felipe</strong>
                    <time title="08 de dezembro às 08:13h" dateTime="2022-12-08 08:13h">Cerca de 1h atrás</time>
                    </div>

                    <button title="Deletar Comentário" className={styles.deleteButton}>
                    <Trash size={24} className={styles.trash}/>
                    </button>
                    
                    </header>
                    <p>{content}</p>
                  
                </div> 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                
                <footer>
                    <button className={styles.likeButton}>
                    <ThumbsUp size={20} />
                    Aplaudir
                    <span>20</span>
                    </button>
                </footer>
            </div>
        
        </div>
    )
}