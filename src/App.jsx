import { ReactLenis} from 'lenis/react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP)

import Header from "./compomemts/Header"
import Hero from "./compomemts/Hero"
import About from "./compomemts/About"
import Skill from "./compomemts/Skill"
import Work from "./compomemts/Work"
import Contact from "./compomemts/Contact"
import Footer from "./compomemts/Footer"

const App = ()=> {
    return (
        <ReactLenis root>
        <Header/>
        <main>
            <Hero/>
            <About/>
            <Skill/>
            <Work/>
            <Contact/>
        </main>
        <Footer/>
        </ReactLenis>
    )
}

export default App