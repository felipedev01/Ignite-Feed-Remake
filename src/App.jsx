import { useState } from 'react'
import { Header } from './Components/Header'
import { Post } from './Components/Post'
import {Comment} from './Components/Comment'
import './global.css'
import styles from '../src/App.module.css'
import { SideBar } from './Components/SideBar'

export function App() {


  const post=[
    {
      id:1,
      author:{
        authorAvatar:"https://avatars.githubusercontent.com/u/81122606?v=4",
        authorName:"Felipe",
        authorRole:"Web Developer",
      },
      publishedAt:new Date('2022-12-11 12:00:00'),
      content:[{
          type:"paragraph",
          content:"Fala galeraa 👋 ",

      },
       {
        type:"paragraph",
        content:"Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",

       },
       {
        type:"link",
        content:"ane.design/doctorcare",
       }
    
    ]

    },
  ]
  

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


