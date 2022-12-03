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
              <time>Publicado há 1 hora</time>
            </header>
            <div>
            <p>Fala galeraa 👋 </p>
            <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da </p>
            <p>Rocketseat. O nome do projeto é DoctorCare 🚀 👉 jane.design/doctorcare #novoprojeto #nlw #rocketseat </p>

            </div>
        </article>
        
    )
}