import whatsUp from "../assets/images/whats-up-icon.png"

export function WhatsUpButton({handleWhatsUp}){

    return (
        <>
        <div onClick={()=>{handleWhatsUp()}} className="button-whats-up">
        <img src={whatsUp} alt="" />
        </div>
        </>
    )
}