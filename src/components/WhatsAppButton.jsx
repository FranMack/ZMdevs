import whatsApp from "../assets/images/whatsappIcon.png"

export function WhatsAppButton({handleWhatsApp}){

    return (
        <>
        <div onClick={()=>{handleWhatsApp()}} className="button-whatsapp">
        <img src={whatsApp} alt="" />
        </div>
        </>
    )
}