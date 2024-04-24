import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import { Planet } from "../models";
import useAlert from "../hooks/useAlert";
import { Alert, Loader } from "../components";
import { Link } from "react-router-dom";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Anatolii",
          from_email: form.email,
          to_email: "schodya@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          console.log("Email successfully sent!");
          setLoading(false);
          showAlert({
            show: true,
            text: "Thank you for your message 😃",
            type: "success",
          });

          setTimeout(() => {
            hideAlert(false);

            setForm({
              name: "",
              email: "",
              message: "",
            });
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: "danger",
          });

          setTimeout(() => {
            hideAlert(false);
          }, [3000]);
        }
      );
  };

  return (
    <section className=" flex  flex-col max-container">
      <div className="bg  z-0"></div>
      <div className="about-container hologram  rounded-lg px-6 py-10">
        {alert.show && <Alert {...alert} />}

        <div className="flex-1 w-full flex flex-col z-10">
          <h1 className="head-text mb-6">Contact</h1>
          <p className=" leading-10">
            Location: Kyiv,Ukraine <br />
            Mail: schodya@gmail.com <br />
            Number: +380969336333 <br />
            Telegram: anatoliikarpov <br />
            Github:{" "}
            <Link
              to="https://github.com/karpov-anatolii"
              target="_blank"
              className=" text-purple-600 font-semibold"
            >
              https://github.com/karpov-anatolii
            </Link>{" "}
            <br />
            LinkedIn:{" "}
            <Link
              to="https://linkedin.com/in/anatolii-karpov-2509b3282"
              target="_blank"
              className=" text-purple-600 font-semibold"
            >
              https://linkedin.com/in/anatolii-karpov-2509b3282
            </Link>{" "}
          </p>
          <h2 className="subhead-text mt-12">Get in Touch</h2>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="w-full flex flex-col gap-7 mt-14"
          >
            <label className="text-black-500 font-semibold">
              Name
              <input
                type="text"
                name="name"
                className="input"
                placeholder="John"
                required
                value={form.name}
                onChange={handleChange}
              />
            </label>
            <label className="text-black-500 font-semibold">
              Email
              <input
                type="email"
                name="email"
                className="input"
                placeholder="John@gmail.com"
                required
                value={form.email}
                onChange={handleChange}
              />
            </label>
            <label className="text-black-500 font-semibold">
              Your Message
              <textarea
                name="message"
                rows="4"
                className="textarea"
                placeholder="Write your thoughts here..."
                value={form.message}
                onChange={handleChange}
              />
            </label>

            <button type="submit" disabled={loading} className="btn">
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>

        <div className=" w-full lg:h-[500px] sm:h-[350px] h-[280px] ">
          <Canvas
            camera={{
              position: [0, 0, 5],
              fov: 75,
              near: 0.1,
              far: 1000,
            }}
          >
            <directionalLight position={[3, 5, 1]} intensity={12} />
            <ambientLight intensity={0.5} />
            {/* <pointLight position={[5, 10, 0]} intensity={2} />
            <spotLight
              position={[10, 10, 10]}
              angle={0.15}
              penumbra={1}
              intensity={2}
            /> */}

            <Suspense fallback={<Loader />}>
              <Planet
                position={[0, 0, 0]}
                rotation={[12.629, -0.6, 0]}
                scale={[3, 3, 3]}
              />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Contact;
