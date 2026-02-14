import { useEffect, useState,useRef } from "react";
import { infoCarrusel } from "../assets/carrusel/info.carrusel";
import { circleArrows } from "../assets/icons/icons";
import { useTranslation } from "../hooks/useTranslation";

function Carrusel({refHeader}) {

  const { t } = useTranslation();

  const listRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollPosition,setScrollPosition]=useState(1)
  const [carruselTopPosition,setCarruselTopPosition]=useState(0)
  const [carruselBottomPosition,setCarruselBottomPosition]=useState(0)




  useEffect(() => {
    const handleScrollPosition = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScrollPosition);
    return () => window.removeEventListener("scroll", handleScrollPosition);
  }, []);


  useEffect(() => {

    const listNode = listRef.current;
    const imgNode = listNode.querySelectorAll("img")[currentIndex];




    if (imgNode && scrollPosition<carruselBottomPosition && scrollPosition>carruselTopPosition ) {
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

    const carruselBottomPosition=carrusel.scrollHeight+carrusel.clientHeight
    setCarruselTopPosition(carruselTopPosition);
    setCarruselBottomPosition(carruselBottomPosition)


    setCurrentIndex(1)
    const intervalId = setInterval(() => {
      const initialSlide = 0;
      const finalSlide = infoCarrusel.length - 1;


      if ( scrollPosition<carruselBottomPosition && scrollPosition>carruselTopPosition ){
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
          <img className="image-carrusel" src={data.image} alt={t(data.titleKey)} />
          <div className="carrusel-center-container">
        <h3>{t(infoCarrusel[currentIndex].titleKey)}</h3>

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
