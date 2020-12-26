import { TimelineLite } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default class InViewFadeIn {
    constructor(element) {
        this.tl = new TimelineLite()
        this.onInit(element)
    }

    onInit(element) {
        const self = this

        ScrollTrigger.create({
            trigger: element,
            animation: self.tl.fromTo(element, 0.5, { opacity: 0 }, { opacity: 1 }).delay(0.6),
            once: true
        });
    }
}
