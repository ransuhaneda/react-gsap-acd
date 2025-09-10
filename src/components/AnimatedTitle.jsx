import { useEffect, useRef  } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedTitle = ({title, containerClass}) => {
  // const titleString = typeof title === 'string' ? title : String(title || '');
  const containerRef = useRef(null);

  useEffect(() => {
    const context = gsap.context(() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: '100 bottom',
          end: 'center bottom',
          toggle: 'play none none reverse',
        }
      });

      titleAnimation.to('.animated-word', {
        opacity: 1,
        transform: 'translate3d(0,0,0) rotateY(0deg) rotateX(0deg)',
        ease: 'power2.inOut',
        stagger: 0.02,
      })
    }, containerRef)

    return () => context.revert();
  }, [])

  return (
    <div 
      ref={containerRef}
      className={`animated-title ${containerClass}`}>
      {title.split("<br />").map((line, index) => (
        <div
          key={index}
          className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
        >
          {line.split(" ").map((word, idx) => (
              <span 
                key={idx} 
                className="animated-word" 
                dangerouslySetInnerHTML={{__html: word}} 
              />
            ))}
        </div>
      ))}
    </div>
  );
};

export default AnimatedTitle;
