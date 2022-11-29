import { useState } from 'react'
import { Header } from './Components/Header'
import { Post } from './Components/Post'
import './global.css'
import styles from '../src/App.module.css'

export function App() {
  

  return (
    <div>
    <Header/>

    <div className={styles.Wrapper}>
      
        <aside>
          Sidebar
        </aside>
        <main>
        <Post author="Felipe" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil omnis odit placeat sequi alias quia consequatur natus deserunt. Accusamus et magnam illo recusandae reprehenderit illum suscipit ut libero ea fugiat.
        "/>
        <Post author="Felipe" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil omnis odit placeat sequi alias quia consequatur natus deserunt. Accusamus et magnam illo recusandae reprehenderit illum suscipit ut libero ea fugiat.
      "/>
      <Post author="Felipe" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil omnis odit placeat sequi alias quia consequatur natus deserunt. Accusamus et magnam illo recusandae reprehenderit illum suscipit ut libero ea fugiat.
      "/>

         <Post author="Felipe" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil omnis odit placeat sequi alias quia consequatur natus deserunt. Accusamus et magnam illo recusandae reprehenderit illum suscipit ut libero ea fugiat.
        "/>

        </main>
       
    </div>
    </div>

    

  )
}


