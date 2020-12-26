import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
gsap.registerPlugin(SplitText);

export function customtransition(node, { speed = 50 }) {

    let tl = gsap.timeline();
    let duration =  1;
    const split = new SplitText(node, {type:'chars'});
	tl.from(split.chars, { duration, opacity:0, y:50, ease:'back(4)', stagger:{
		from:'end',
		each:0.05
	}});
    // let chars = new SplitText(node, {type:'chars'}); 
    // tl.from(chars.chars,{
    //     duration,
    //     rotate: 90,
    //     opacity: 0,
    //     y: 10,
    //     stagger: 0.1
    // })
    console.log(node, 'characters');

    return {
        duration: tl.totalDuration() * 1000,
        tick: t => {
            tl.progress(t);
        }
    };
}