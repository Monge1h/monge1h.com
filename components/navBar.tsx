import {useState} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './navBar.module.css'

export default function NavBar(){
    const [sideBar, setSideBar] = useState(false)

    const path = useRouter()

    const toggleMenu = () => setSideBar(!sideBar)
	return (
<nav className={styles.navContainer}>
          <Link href="/"><h1 className={styles.h1}>Jorge Monge</h1></Link> 
            <section id={styles.menu_bar}>
                <ul className={`${styles.nav} ${sideBar? styles.change : ""}`}>
                    <li><Link href="/" id={path.route == "/" ? styles.active:""}>ABOUT</Link></li>
                    <li><Link href="/blog" id={path.route.includes("/blog") ? styles.active:""}>BLOG</Link></li>
                    <li><Link href="/projects" id={path.route.includes("/projects") ? styles.active:""}>PROJECTS</Link></li>
                    <li><Link href="/contact" id={path.route == "/contact" ? styles.active:""}>CONTACT</Link></li>
                </ul>
                <div className={`${styles.menu_bg} ${sideBar ? styles.change_bg :''}`} id={styles.menu_bg_id} ></div>
            </section>
            <div className={`${styles.overlay} ${sideBar ? styles.overlay_display:''}`} onClick={toggleMenu}></div>
            <div id={styles.menu} className={sideBar? styles.change : ''} onClick={toggleMenu}>
                    <div id={styles.bar1} className={styles.bar}></div>
                    <div id={styles.bar2} className={styles.bar}></div>
                    <div id={styles.bar3} className={styles.bar}></div>
            </div>
       </nav>
	)
}