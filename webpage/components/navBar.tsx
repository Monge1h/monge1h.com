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
          <Link href="/"><a><h1 className={styles.h1}>Jorge Monge</h1></a></Link> 
            <section id={styles.menu_bar}>
                <ul className={`${styles.nav} ${sideBar? styles.change : ""}`}>
                    <li><Link href="/"><a id={path.route == "/" ?styles.active:""}>ABOUT</a></Link></li>
                    <li><Link href="/blog"><a id={path.route.includes("/blog") ?styles.active:""}>BLOG</a></Link></li>
                    <li><a href="#" id={path.route == "/projects" ?styles.active:""}>PROJECTS</a></li>
                    <li><Link href="/contact"><a id={path.route == "/contact" ?styles.active:""}>CONTACT</a></Link></li>
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