import styles from '../Components/Post.module.css'
import {Avatar} from '../Components/Avatar'
import {Comment} from '../Components/Comment'
export function Post(props){


    console.log(props)
   

    return(

        <article className={styles.Post}>
            <header>
                <div className={styles.Author}>
                <Avatar  src={props.author.authorAvatar} />
                <div className={styles.AuthorInfo}>
                    <strong>{props.author.authorName}</strong>
                    <span>{props.author.authorRole}</span>
                </div>

                </div>
              <time title="12 de dezembro de 2022 às 12 h"dateTime={props.publishedAt}>Publicado há 1 hora</time>
            </header>
            <div className={styles.Content}>
            <p> {props.content[0].content} </p>

            <p>{props.content[1].content}</p>
             <p>👉 <a href="">{props.content[2].content}</a></p>
              <p> 
                <a href="">#novoprojeto </a>
                <a href="">#nlw </a> 
                <a href="">#rocketseat </a>
                </p>
                
            </div>
             
             <form action="" className={styles.contentForm}>

                <strong>Deixe seu Feedback</strong>
                <textarea
                placeholder="Deixe seu comentário"
                 />
                 <footer>
                 <button type="submit"> Publicar</button>
                 </footer>
              
             </form>
             <div className={styles.commentList}>
                <Comment/>
             </div>
        </article>
        
        
    )
}