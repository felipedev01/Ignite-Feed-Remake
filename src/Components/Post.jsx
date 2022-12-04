import styles from '../Components/Post.module.css'
export function Post(){

   

    return(

        <article className={styles.Post}>
            <header>
                <div className={styles.Author}>
                <img className={styles.Avatar}src="https://avatars.githubusercontent.com/u/81122606?v=4" />
                <div className={styles.AuthorInfo}>
                    <strong>Felipe</strong>
                    <span>Web Developer</span>
                </div>

                </div>
              <time>Publicado há 1 hora</time>
            </header>
            <div className={styles.Content}>
            <p> Fala galeraa 👋 </p>

            <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da 

            Rocketseat. O nome do projeto é DoctorCare 🚀</p>
             <p>👉 <a href="">ane.design/doctorcare</a></p>
              <p> 
                <a href="">#novoprojeto </a>
                <a href="">#nlw </a> 
                <a href="">#rocketseat </a>
                </p>
                
            </div>
             
             <form action="" className={styles.contentForm}>
                <textarea
                placeholder="Deixe seu comentário"
                 />

             </form>
            
        </article>
        
    )
}