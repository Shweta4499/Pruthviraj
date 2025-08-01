import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import SpaceshipCanvas from "./canvas/SpaceshipCanvas";

import github from "../assets/social_media/github.png";
import linkedin from "../assets/social_media/linkedine.png";
import twitter from "../assets/social_media/twitter.png";
import youtube from "../assets/social_media/youtube.png";
import facebook from "../assets/social_media/facebook.png";
import instagram from "../assets/social_media/instagram.png";



const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [triggerLaunch, setTriggerLaunch] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (!isTyping) setIsTyping(true);

    clearTimeout(window.typingTimeout);
    window.typingTimeout = setTimeout(() => {
      setIsTyping(false);
    }, 1200);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      alert("Please fill in both your name and email.");
      return;
    }
    setLoading(true);
    setTriggerLaunch(true);

    emailjs.send(

      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,

        
        {
          from_name: form.name,
          to_name: "Pruthviraj",
          from_email: form.email,
          to_email: "kulboyraj23@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_USER_ID
        
      )
      .then(
        () => {
          setLoading(false);
          alert("🚀 Message beamed up successfully!");
          setForm({ name: "", email: "", message: "" });
          setIsTyping(false);
          setTimeout(() => setTriggerLaunch(false), 10000);
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Something went wrong. Please try again.");
        }
      );

      
  };


return (
  <div className="relative w-full overflow-hidden">
    <div className="absolute inset-0 z-0 block sm:hidden opacity-30 blur-[2px] pointer-events-none">
      <SpaceshipCanvas isTyping={isTyping} triggerLaunch={triggerLaunch} />
    </div>

    <div className="mt-4 xl:mt-4 flex xl:flex-row flex-col-reverse gap-2 relative z-10">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-2"
        >
          {["name", "email", "message"].map((field) => (
            <label key={field} className="flex flex-col">
              <span className="text-white font-medium mb-4">
                {field === "message"
                  ? "Your Message"
                  : `Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
              </span>
              {field === "message" ? (
                <textarea
                  rows={7}
                  name={field}
                  value={form[field]}
                  onChange={handleChange}
                  placeholder="What do you want to say?"
                  className="bg-[#1a1a2e] py-4 px-6 placeholder:text-[#888] text-white rounded-lg outline-none border border-[#2e2e3e] focus:ring-2 focus:ring-[#915EFF] transition-all duration-300"
                />
              ) : (
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  value={form[field]}
                  onChange={handleChange}
                  placeholder={`Enter your ${field}`}
                  className="bg-[#1a1a2e] py-4 px-6 placeholder:text-[#888] text-white rounded-lg outline-none border border-[#2e2e3e] focus:ring-2 focus:ring-[#915EFF] transition-all duration-300"
                />
              )}
            </label>
          ))}

          <button
            type="submit"
            className="bg-[#915EFF] py-3 px-8 rounded-xl outline-none w-fit self-center text-white font-bold shadow-md hover:shadow-[0_0_20px_#915EFF] transition-all duration-300"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>

       
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] hidden sm:block"
      >
        <SpaceshipCanvas isTyping={isTyping} triggerLaunch={triggerLaunch} />
      </motion.div>
    </div>
    <div className="mt-10 text-center text-sm text-gray-400">
  <p>© 2025 KBR Solutions. All rights reserved.</p>
  <p className="mt-1">📧 pruthvirajbanne2001@gmail.com</p>
  <p className="mt-1">📞 +91 78208 66043</p>
  <div className="mt-6 flex justify-center items-center flex-wrap gap-4">
    {[
      { href: "https://github.com/KulboyRaj", src: github, alt: "GitHub" },
      { href: "https://linkedin.com/in/pruthviraj-banne", src: linkedin, alt: "LinkedIn" },
      { href: "https://twitter.com/KulboyRaj", src: twitter, alt: "Twitter" },
      { href: "https://youtube.com/@pruthvirajbanne229", src: youtube, alt: "YouTube" },
      { href: "https://facebook.com/vijaya.banne", src: facebook, alt: "Facebook" },
      { href: "https://instagram.com/kulboyraj", src: instagram, alt: "Instagram" },
    ].map(({ href, src, alt }) => (
      <a key={alt} href={href} target="_blank" rel="noopener noreferrer">
        <img
          src={src}
          alt={alt}
          className="w-10 h-10 rounded-full border border-white p-1 filter invert hover:scale-110 transition-all duration-300"
        />
      </a>
    ))}
  </div>

</div>

  </div>
);
}
export default SectionWrapper(Contact, "contact");
