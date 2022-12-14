import {format, formatDistance, formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import styles from '../Components/Post.module.css'
import {Avatar} from '../Components/Avatar'
import {Comment} from '../Components/Comment'

export function Post({author,content,publishedAt}){


    const comentList= [1,2,3]

    const publishedDateFormatted= format(publishedAt,"d 'de' MMMM 'de' y 'às' H mm ss 'h'",{
        locale:ptBR,
    })

    const publishedDateRelativeToNow=formatDistanceToNow(publishedAt,{
        locale:ptBR,
        addSuffix:true,
    })
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
              <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
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
                {
                    comentList.map(line=>{
                        return(
                            <Comment/>
                        )
                    })
                }
                
             </div>
        </article>
        
        
    )
}