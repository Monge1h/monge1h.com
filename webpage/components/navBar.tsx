import styles from './navBar.module.css'

export default function NavBar(){
	return (
<nav className={styles.navContainer}>
           <h1 className={styles.h1}>Jorge Monge</h1>
            <section id={styles.menu_bar}>
                <ul id={styles.menu_ul} className={styles.nav}>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="/blog.html">BLOG</a></li>
                    <li><a href="#">PROJECTS</a></li>
                    <li><a href="/contact.html">CONTACT</a></li>
                </ul>
                <div className={styles.menu_bg} id={styles.menu_bg}></div>
            </section>
            <div id={styles.overlay}></div>
            <div id={styles.menu}>
                    <div id={styles.bar1} className={styles.bar}></div>
                    <div id={styles.bar2} className={styles.bar}></div>
                    <div id={styles.bar3} className={styles.bar}></div>
            </div>
       </nav>
	)
}