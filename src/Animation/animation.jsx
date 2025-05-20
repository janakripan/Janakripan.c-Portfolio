import { animate, delay, easeInOut } from "motion";

export const topBar = (isOpen) => ({
  initial: { rotate: 0 },
  animate: { rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 },
  transition: { duration: 0.3, ease: 'easeInOut' },
});
export const middleBar=(isOpen)=>({
    initial: { rotate: 0 },
  animate: { rotate: isOpen ? -45 : 0 },
  transition: { duration: 0.3, ease: 'easeInOut' },
})
export const bottomBar=(isOpen)=>({
   initial: { rotate: 0 },
     animate: { rotate: isOpen ? 45 : 0 , y: isOpen ? -6 : 0},
  transition: { duration: 0.3, ease: 'easeInOut' },
})

export const sideNav=(isOpen)=>({
  initial:{y:-300},
  animate:{y:isOpen ? 0 :-300},
  transition:{duration:0.3,ease:"easeInOut"}
})

export const handWave = {
  initial: { rotate: 0 },
  animate: {
    rotate: [0, 20, -10, 20, -10, 0], 
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      repeat: Infinity,
      repeatDelay: 1,
    },
  },
}


export const slideUpStagger = {
  initial: { y: 50, opacity: 0 },
  animate: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.5, 
      duration: 0.6,
      ease: "easeOut",
    },
  }),
}

export const image={
  initial:{scale:0,
    opacity:0,
    y:50
  },
  animate:{
    opacity:1,
    y:0,
    scale:1,
    rotate: [0, 5, -5, 0],
    transition:{
       duration:1,
       ease:"easeInOut"
    }
  }
}

export const leftFadeIn=(position,delay)=>({
  initial:{
    x:position,
    opacity:0
  },
  after:{
    x:0,
    opacity:1,
    transition:{
     duration:delay,
     ease:'easeInOut'
    }
  }
})

export const rightFadeIn=(position,delay)=>({
  initial:{
    x:position,
    opacity:0
  },
  after:{
    x:0,
    opacity:1,
    transition:{
     duration:delay,
     ease:'easeInOut'
    }
  }
})

export const available={
  initial:{
    y:80,
    opacity:0
  },
  after:{
    y:0,
    opacity:1,
    transition:{
      duration:2
    }
  }
}

export const fading=(delay)=>({
  initial:{
    opacity:0,
    scale:0
  },
  after:{
    opacity:1,
    scale:1,
    transition:{
      duration:delay
    }
  }
})