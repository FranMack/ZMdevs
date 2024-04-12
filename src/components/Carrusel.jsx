import { useEffect, useState,useRef } from "react";
import { infoCarrusel } from "../assets/carrusel/info.carrusel";
import { circleArrows } from "../assets/icons/icons";

function Carrusel({refHeader}) {


  const listRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollPosition,setScrolPosition]=useState(1)
  const [carruselTopPosition,setcarruselTopPosition]=useState(0)
  const [carruselBottonPosition,setcarruselBottonPosition]=useState(0)


  


  

  const handleScrollPosition=()=>{
    setScrolPosition(window.scrollY)
  }

  window.addEventListener("scroll",handleScrollPosition)


  useEffect(() => {
    
    const listNode = listRef.current;
    const imgNode = listNode.querySelectorAll("img")[currentIndex];

    


    if (imgNode && scrollPosition<carruselBottonPosition && scrollPosition>carruselTopPosition ) {
      imgNode.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }

  }, [currentIndex]);


  const scrollToImage = (direction) => {
  
    if (direction === 'prev') {
   
     
      setCurrentIndex(curr => {
        const isFirstSlide = currentIndex === 0;
        return isFirstSlide ? 0 : curr - 1;
      })
    } else {
      const isLastSlide = currentIndex === infoCarrusel.length - 1;
      if (!isLastSlide) {
        setCurrentIndex(curr => curr + 1);
      }
    }
  }


  useEffect(() => {

    const carrusel=document.querySelector(".carrusel-slider")
    const carruselTopPosition=carrusel.scrollHeight
  
    const carruselBottonPosition=carrusel.scrollHeight+carrusel.clientHeight
    setcarruselTopPosition(carruselTopPosition);
    setcarruselBottonPosition(carruselBottonPosition)


    setCurrentIndex(1)
    const intervalId = setInterval(() => {
      const initialSlide = 0;
      const finalSlide = infoCarrusel.length - 1;

      
      if ( scrollPosition<carruselBottonPosition && scrollPosition>carruselTopPosition ){
      setCurrentIndex(curr => {
        if (curr < finalSlide) {
          return curr + 1;
        } else {
          return initialSlide;
        }
      });}



    }, 4000);
  
    // Devuelve una función de limpieza para limpiar el intervalo cuando el componente se desmonte o cuando el estado cambie
    return () => clearInterval(intervalId);
  }, [scrollPosition]);








  return (
    <section className="seccion-carrusel carruselReveal">

      <div className="arrows-left-container" onClick={() => scrollToImage('prev')}>{circleArrows.left}</div>
      <div className="arrows-right-container" onClick={() => scrollToImage('next')}>{circleArrows.right}</div>
     
      <div className="carrusel-slider" ref={listRef}>
        {infoCarrusel.map((data,i)=>{
          return( <div key={i} className="image-container" >
          <img className="image-carrusel" src={data.image} alt={data.title} />
          <div className="carrusel-center-container">
        <h3>{infoCarrusel[currentIndex].title}</h3>
        <p>{infoCarrusel[currentIndex].text}</p>
      </div>
         </div>)
        })}
      
      </div>

      <div className="container-bullets">
        {infoCarrusel.map((data, k) => {
          return (
            <div
              className={`bullet ${currentIndex===k ? "selected-bullet":"bullet"}`}
              key={k}
            ></div>
          );
        })}
      </div>
     
    </section>
  );
}

export default Carrusel;
