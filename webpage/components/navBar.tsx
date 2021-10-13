import {useState} from 'react'
import styles from './navBar.module.css'

export default function NavBar(){
    const [sideBar, setSideBar] = useState(false)

    const toggleMenu = () => setSideBar(!sideBar)
	return (
<nav className={styles.navContainer}>
           <h1 className={styles.h1}>Jorge Monge</h1>
            <section id={styles.menu_bar}>
                <ul id={styles.menu_ul} className={`${styles.nav}`}>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="/blog.html">BLOG</a></li>
                    <li><a href="#">PROJECTS</a></li>
                    <li><a href="/contact.html">CONTACT</a></li>
                </ul>
                <div className={`${styles.menu_bg} ${sideBar ? styles.change_bg :''}`} id={styles.menu_bg_id} ></div>
            </section>
            <div id={styles.overlay}></div>
            <div id={styles.menu} className={sideBar? styles.change : ''} onClick={toggleMenu}>
                    <div id={styles.bar1} className={styles.bar}></div>
                    <div id={styles.bar2} className={styles.bar}></div>
                    <div id={styles.bar3} className={styles.bar}></div>
            </div>
       </nav>
	)
}