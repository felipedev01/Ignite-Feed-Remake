import { useState } from 'react'
import { Header } from './Components/Header'
import { Post } from './Components/Post'
import {Comment} from './Components/Comment'
import './global.css'
import styles from '../src/App.module.css'
import { SideBar } from './Components/SideBar'

export function App() {
  

  return (
    <div>
    <Header/>

    <div className={styles.Wrapper}>
      
        <SideBar/>
        <main>
        <Post author="Felipe" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil omnis odit placeat sequi alias quia consequatur natus deserunt. Accusamus et magnam illo recusandae reprehenderit illum suscipit ut libero ea fugiat.
        "/>
        <Comment></Comment>
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


