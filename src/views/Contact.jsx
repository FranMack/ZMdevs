import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { socialMedia } from "../assets/social_media/icons";

function Contact({ refContact }) {
  const singUpForm = useFormik({
    initialValues: {
      name: "",
      subject: "",
      email: "",
      message: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "firstname minimum 2 character")
        .required("firstname is required"),
      subject: Yup.string()
        .min(2, "subject minimum 2 character")
        .required("subject is required"),
      email: Yup.string().email("invalid email").required("email is required"),
      message: Yup.string()
        .min(4, "message minimum 4 characters")
        .required("message is required"),
    }),

    onSubmit: (values) => {
      axios
        .post("https://formspree.io/f/xgegwpzd", {
          name: values.name,
          subject: values.subject,
          email: values.email,
          message: values.message,
        })
        .then((response) => {
          console.log(response.data);
          singUpForm.resetForm();
          handleModal();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });

  return (
    <section ref={refContact} className="contact-container">
      <h3 className="section-title-contact">CONTACT</h3>

      <div className="contact-center-contain" style={{ color: "#E0E1E3" }}>
        <div className="contact-internal-contain">
          <article className="contact-social-media">
            <h4 style={{ color: "white" }}>LET'S WORK TOGHETER</h4>
            <p>
              Do you have an idea for a software project? We'd love to hear it!
              Tell us the details and we will work together to make it a
              reality.
            </p>
            <div className="social-media-icons">
              {socialMedia.map((media, i) => {
                return (
                  <div key={i} className="social-media-icon-file">
                    {media.icon}
                    <p style={{ color: "#E0E1E3" }}>{media.text}</p>
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
            onSubmit={singUpForm.handleSubmit}
          >
            <label htmlFor="name">NAME</label>
            <input
              type="text"
              id="name"
              className={`${
                singUpForm.errors.name &&
                singUpForm.touched.name &&
                "input-warning"
              }`}
              value={singUpForm.values.name}
              onChange={singUpForm.handleChange}
              onBlur={singUpForm.handleBlur}
            />
            <p className="form-warning">
              {singUpForm.errors.name &&
                singUpForm.touched.name &&
                singUpForm.errors.name}
            </p>
            <label htmlFor="subject">SUBJECT</label>
            <input
              type="text"
              id="subject"
              className={`${
                singUpForm.errors.subject &&
                singUpForm.touched.subject &&
                "input-warning"
              }`}
              value={singUpForm.values.subject}
              onChange={singUpForm.handleChange}
              onBlur={singUpForm.handleBlur}
            />
            <p className="form-warning">
              {singUpForm.errors.subject &&
                singUpForm.touched.subject &&
                singUpForm.errors.subject}
            </p>
            <label htmlFor="email">EMAIL</label>
            <input
              type="text"
              id="email"
              className={`${
                singUpForm.errors.email &&
                singUpForm.touched.email &&
                "input-warning"
              }`}
              value={singUpForm.values.email}
              onChange={singUpForm.handleChange}
              onBlur={singUpForm.handleBlur}
            />
            <p className="form-warning">
              {singUpForm.errors.email &&
                singUpForm.touched.email &&
                singUpForm.errors.email}
            </p>
            <label htmlFor="message">MESSAGE</label>
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              className={`${
                singUpForm.errors.message &&
                singUpForm.touched.message &&
                "input-warning"
              }`}
              value={singUpForm.values.message}
              onChange={singUpForm.handleChange}
              onBlur={singUpForm.handleBlur}
            />
            <p className="form-warning">
              {singUpForm.errors.message &&
                singUpForm.touched.message &&
                singUpForm.errors.message}
            </p>

            <button type="submit">SEND MESSAGE</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
