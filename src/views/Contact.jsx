import axios from "axios";
import { useFormik } from "formik";
import { useContext } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { socialMedia } from "../assets/icons/icons";
import PopUp from "../components/PopUp";
import { LanguageContext } from "../context";

function Contact({ refContact }) {
  const { language } = useContext(LanguageContext);
  const signUpForm = useFormik({
    initialValues: {
      name: "",
      subject: "",
      email: "",
      message: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "El nombre debe tener al menos 2 caracteres")
        .required("Campo requerido"),
      subject: Yup.string().required("Campo requerido"),
      email: Yup.string().email("Email invalido").required("Campo requerido"),
      message: Yup.string().required("Campo requerido"),
    }),

    onSubmit: (values) => {
      axios
        .post("https://formspree.io/f/mnnqgrqw", {
          name: values.name,
          subject: values.subject,
          email: values.email,
          message: values.message,
        })
        .then((response) => {
          console.log(response.data);
          signUpForm.resetForm();
          handleMensajeEnviado();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });

  function handleMensajeEnviado() {
    const popUp = document.querySelector(".popUp-container");
    console.log("cambio");
    if (popUp) {
      popUp.classList.add("popUp-motion");
      setTimeout(() => {
        popUp.classList.remove("popUp-motion");
      }, 3000);
    }
  }

  return (
    <section ref={refContact} className="contact-container">
      <h3 className="section-title-contact">
        {language === "spanish" ? "Contacto" : "Contact"}
      </h3>

      <div className="contact-center-container">
        <PopUp />
        <div className="contact-internal-contain">
          <article className="contact-social-media">
            <h4>
              {language === "spanish"
                ? "TRABAJEMOS JUNTOS"
                : "LET'S WORK TOGETHER"}
            </h4>
            {language === "spanish" ? (
              <>
                <p>
                  ¿Tenés una idea para un proyecto de software?
                  <br />
                  ¡Nos encantaría escucharlo! Cuéntanos los detalles y
                  trabajaremos juntos para convertirlo en realidad.
                </p>
              </>
            ) : (
              <>
                <p>
                  Do you have an idea for a software project?
                  <br /> We would love to hear it! Tell us the details and we
                  will work together to make it happen.
                </p>
              </>
            )}

            <div className="social-media-icons">
              {socialMedia.map((media, i) => {
                return (
                  <div key={i} className="social-media-icon-file">
                    {media.icon}
                    <Link to={media.link} target="_blank">
                      <p>{media.text}</p>
                    </Link>
                  </div>
                );
              })}
            </div>
          </article>
        </div>
        <div className="contact-internal-contain">
          <form
            className="contact-form"
            action="submit"
            onSubmit={signUpForm.handleSubmit}
          >
            <label htmlFor="name">
              {language === "spanish" ? "NOMBRE" : "NAME"}
            </label>
            <input
              type="text"
              id="name"
              className={`${
                signUpForm.errors.name &&
                signUpForm.touched.name &&
                "input-warning"
              }`}
              value={signUpForm.values.name}
              onChange={signUpForm.handleChange}
              onBlur={signUpForm.handleBlur}
            />
            <p className="form-warning">
              {signUpForm.errors.name &&
                signUpForm.touched.name &&
                signUpForm.errors.name}
            </p>
            <label htmlFor="subject">
              {language === "spanish" ? "ASUNTO" : "SUBJECT"}
            </label>
            <input
              type="text"
              id="subject"
              className={`${
                signUpForm.errors.subject &&
                signUpForm.touched.subject &&
                "input-warning"
              }`}
              value={signUpForm.values.subject}
              onChange={signUpForm.handleChange}
              onBlur={signUpForm.handleBlur}
            />
            <p className="form-warning">
              {signUpForm.errors.subject &&
                signUpForm.touched.subject &&
                signUpForm.errors.subject}
            </p>
            <label htmlFor="email">EMAIL</label>
            <input
              type="text"
              id="email"
              className={`${
                signUpForm.errors.email &&
                signUpForm.touched.email &&
                "input-warning"
              }`}
              value={signUpForm.values.email}
              onChange={signUpForm.handleChange}
              onBlur={signUpForm.handleBlur}
            />
            <p className="form-warning">
              {signUpForm.errors.email &&
                signUpForm.touched.email &&
                signUpForm.errors.email}
            </p>
            <label htmlFor="message">
              {language === "spanish" ? "MENSAJE" : "MESSAGE"}
            </label>
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              className={`${
                signUpForm.errors.message &&
                signUpForm.touched.message &&
                "input-warning"
              }`}
              value={signUpForm.values.message}
              onChange={signUpForm.handleChange}
              onBlur={signUpForm.handleBlur}
            />
            <p className="form-warning">
              {signUpForm.errors.message &&
                signUpForm.touched.message &&
                signUpForm.errors.message}
            </p>

            <button type="submit">
              {language === "spanish" ? "ENVIAR" : "SEND"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
