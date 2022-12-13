import styles from '../Components/Post.module.css'
import {Avatar} from '../Components/Avatar'
import {Comment} from '../Components/Comment'

export function Post({author,content,publishedAt}){


    console.log(author)
   

    return(

        <article className={styles.Post}>
            <header>
                <div className={styles.Author}>
                <Avatar  src={author.authorAvatar} />
                <div className={styles.AuthorInfo}>
                    <strong>{author.authorName}</strong>
                    <span>{author.authorRole}</span>
                </div>

                </div>
              <time title="12 de dezembro de 2022 às 12 h"dateTime={publishedAt}>Publicado há 1 hora</time>
            </header>
            <div className={styles.Content}>
                {content.map(line=>{
                    if(line.type=="paragraph"){
                        return(
                            <p>{line.content}</p>
                        )
                    }else{
                        return(
                            <p><a href="#">{line.content}</a></p> 
                        )
                       
                    }
                })}
            
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