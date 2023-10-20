"use client";

import Link from "next/link";
import github from "@/public/icons/github.svg";
import linkedin from "@/public/icons/linkedin.svg";
import Image from "next/image";
import { useState, FormEvent } from "react";
import { sendEmail } from "@/lib/nodemailer";
import { useLangContext } from "@/context/lang";

const ContactSection = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [validation, setValidation] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  //@ts-ignore
  const { lang } = useLangContext();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    try {
      await sendEmail(inputs.name, inputs.email, inputs.message);
      setValidation("Message sent successfully");
    } catch (error) {
      setErrorMessage("Error in sending message, Retry please");
      console.log(error);
    } finally {
      setIsSending(false);
      setInputs({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <section className="contact" id="contact">
      <h1 className="title">{"<contact>"}</h1>
      <p className="text-4xl max-md:text-2xl text-primary-black ">
        {lang === "EN" ? "Feel free to " : "Prenez le temps de "}{" "}
        <span className="text-primary-blue">
          {lang === "EN" ? "contact me" : "me contacter"}
        </span>
        {lang === "EN" ? ", I will" : ", Je "}
        <span className="text-primary-blue">
          {lang === "EN" ? "respond to you" : "réponderais "}
        </span>
        {lang === "EN" ? "when I could" : "quand je serais disponible."}
      </p>
      <form
        className="flex max-md:flex-col w-full my-[5vh] gap-[5vw] md:flex-wrap"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="w-full flex max-lg:flex-col gap-[5vh]">
          <div className="flex flex-col lg:justify-between max-lg:gap-[20px]">
            <input
              type="text"
              placeholder={lang === "EN" ? "Name" : "Nom"}
              value={inputs.name}
              onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
              className="text-4xl max-md:text-2xl px-6 py-4 text-primary-black border-2 border-primary-blue rounded-2xl focus:border-primary-dark_blue placeholder:text-primary-black outline-none"
            />
            <input
              type="email"
              placeholder={lang === "EN" ? "Email address" : "Adresse e-mail"}
              value={inputs.email}
              onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
              className="text-4xl max-md:text-2xl px-6 py-4 text-primary-black border-2 border-primary-blue rounded-2xl focus:border-primary-dark_blue placeholder:text-primary-black outline-none"
            />
          </div>
          <textarea
            placeholder="Message..."
            rows={8}
            value={inputs.message}
            onChange={(e) => setInputs({ ...inputs, message: e.target.value })}
            className="w-full px-6 py-4 text-2xl max-md:text-lg text-primary-black border-2 border-primary-blue rounded-2xl focus:border-primary-dark_blue placeholder:text-primary-black outline-none"
          />
        </div>
        {validation && (
          <span className="text-3xl text-green-500">{validation}</span>
        )}
        {errorMessage && (
          <span className="text-3xl text-primary-red">{errorMessage}</span>
        )}
        <input
          type="submit"
          value={isSending ? "Sending..." : "Send"}
          className="bg-primary-blue text-primary-light py-8 max-md:py-4 px-24 max-md:px-12 text-3xl max-md:text-xl font-semibold rounded-2xl ml-auto cursor-pointer hover:bg-primary-dark_blue"
        />
      </form>
      <h1 className="title-close">{"</contact>"}</h1>
      <div className="w-full mt-[5vh] py-[5vh] flex items-center justify-center gap-[20vw]">
        <Link target="_blank" href="https://github.com/WassimZo">
          <Image src={github} width={50} height={50} alt="github icon" />
        </Link>
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/wassim-zouaoui-94354a1b8/"
        >
          <Image src={linkedin} width={50} height={50} alt="linkedin icon" />
        </Link>
      </div>
    </section>
  );
};

export default ContactSection;
