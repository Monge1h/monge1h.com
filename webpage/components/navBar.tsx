import {useState} from 'react'
import Link from 'next/link'
import styles from './navBar.module.css'

export default function NavBar(){
    const [sideBar, setSideBar] = useState(false)

    const toggleMenu = () => setSideBar(!sideBar)
	return (
<nav className={styles.navContainer}>
           <h1 className={styles.h1}>Jorge Monge</h1>
            <section id={styles.menu_bar}>
                <ul className={`${styles.nav} ${sideBar? styles.change : ""}`}>
                    <li><Link href="/"><a >ABOUT</a></Link></li>
                    <li><Link href="/blog"><a >BLOG</a></Link></li>
                    <li><a href="#">PROJECTS</a></li>
                    <li><Link href="/contact"><a >CONTACT</a></Link></li>
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