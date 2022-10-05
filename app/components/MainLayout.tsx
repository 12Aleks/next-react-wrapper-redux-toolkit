import React, { FC, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import Header from './Header';



interface IMain {
  children: any
}


const MainLayout: FC<IMain> = ({ children }) => {
  const router = useRouter()
  const user: boolean = false;

  const name = children
  console.log(router)

  useEffect(() => {
    // if (!user) router.push('/')
  }, [user])

  return (
    <div className={styles.container}>
      <Header/>
      <main className={styles.main}>
        {children}
      </main>
    </div>
  )
}
export default MainLayout