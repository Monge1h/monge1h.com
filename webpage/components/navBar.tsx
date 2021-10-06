
export default function NavBar(){
	return (
<nav>
           <h1>Jorge Monge</h1>
            <section id="menu-bar">
                <ul id="menu-ul" className="nav">
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="/blog.html">BLOG</a></li>
                    <li><a href="#">PROJECTS</a></li>
                    <li><a href="/contact.html">CONTACT</a></li>
                </ul>
                <div className="menu-bg" id="menu-bg"></div>
            </section>
            <div id="overlay"></div>
            <div id="menu">
                    <div id="bar1" className="bar"></div>
                    <div id="bar2" className="bar"></div>
                    <div id="bar3" className="bar"></div>
            </div>
       </nav>
	)
}