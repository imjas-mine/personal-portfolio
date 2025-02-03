import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="bg-gradient-to-r from-[#151b34]  to-[#030d35] flex flex-col justify-center items-center font-roboto ">
      <div className="bg-slate-950 w-[85%] flex flex-col items-center mt-20 pb-20">
        <h1 className="bg-gradient-to-r from-pink-500 to-purple-600 font-bold text-5xl bg-clip-text text-transparent py-10">
          CONTACT ME
        </h1>
        <div className="flex  text-white justify-around w-full text-2xl">
          <h1 className="flex justify-center items-center">
            <svg
            className="h-10 w-10 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 48 48"
            >
              <path
                fill="#45413c"
                d="M1.75 38.06a22.25 1.63 0 1 0 44.5 0a22.25 1.63 0 1 0-44.5 0"
                opacity="0.15"
              />
              <path fill="#fff" d="M3.02 11.29h41.96v25.69H3.02Z" />
              <path
                fill="#f0f0f0"
                d="M43.89 33.17H4.11A1.08 1.08 0 0 1 3 32.09v3.8A1.09 1.09 0 0 0 4.11 37h39.78A1.09 1.09 0 0 0 45 35.89v-3.8a1.08 1.08 0 0 1-1.11 1.08"
              />
              <path
                fill="none"
                stroke="#45413c"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.02 11.29h41.96v25.69H3.02Z"
              />
              <path
                fill="none"
                stroke="#45413c"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.33 11.62L24 25.76l20.67-14.14M27.82 23.16L44.67 36.6m-41.34 0l16.85-13.44"
              />
              <path
                fill="#00b8f0"
                stroke="#45413c"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M18.64 31.25v-14a2 2 0 0 1 2-2.22H27a1.69 1.69 0 0 1 1.81 1.76A1.73 1.73 0 0 1 27 18.51h-4.53v3.72h4.2A1.71 1.71 0 0 1 28.54 24a1.75 1.75 0 0 1-1.87 1.76h-4.2v3.88h4.73a1.69 1.69 0 0 1 1.8 1.77a1.73 1.73 0 0 1-1.82 1.76h-6.57a1.86 1.86 0 0 1-1.97-1.92"
              />
            </svg>
            Email:{" "}
            <a
              className="underline text-blue-400 hover:text-blue-300"
              href="mailto:jasminkaur5858@gmail.com"
            >
              jasminkaur5858@gmail.com
            </a>
          </h1>
          <h1 className="flex items-center"><svg className="h-10 w-10 mr-2 " xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36"><path fill="#31373d" d="m34.06 26.407l-3.496-3.496a4.942 4.942 0 0 0-8.34 2.528c-5.765-1.078-11.372-6.662-11.721-11.653a4.908 4.908 0 0 0 2.586-1.36a4.943 4.943 0 0 0 0-6.99L9.594 1.94a4.943 4.943 0 0 0-6.99 0C-7.882 12.426 23.574 43.882 34.06 33.396a4.944 4.944 0 0 0 0-6.989"/></svg>Phone: 519-533-8833</h1>
          <h1 className="flex justify-center items-center hover:text-blue-300 cursor-pointer" onClick={()=>{window.open("https://www.linkedin.com/in/jasmine-kaur-852207229/",'_blank');}}>  <svg className="h-10 w-10 mr-2"  xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 72 72"><rect width="50" height="50" x="11" y="11" fill="#61b2e4" rx="3"/><path fill="#fff" d="M20 30h6v21h-6z"/><circle cx="23" cy="22" r="3.5" fill="#fff"/><path fill="#fff" d="M42.5 35c-2.209 0-4 1.168-4 4.5V51h-6V30h6v2.21h-.002A7.98 7.98 0 0 1 44.5 29.5c4.418 0 8 3.3 8 9V51h-6V39.5c0-3.332-1.79-4.5-4-4.5"/><g fill="none" stroke="#000" stroke-width="2"><rect width="50" height="50" x="11" y="11" stroke-miterlimit="10" rx="3"/><path stroke-linecap="round" stroke-linejoin="round" d="M20 30h6v21h-6z"/><circle cx="23" cy="22" r="3.5" stroke-linecap="round" stroke-linejoin="round"/><path stroke-linecap="round" stroke-linejoin="round" d="M42.5 35c-2.209 0-4 1.168-4 4.5V51h-6V30h6v2.21h-.002A7.98 7.98 0 0 1 44.5 29.5c4.418 0 8 3.3 8 9V51h-6V39.5c0-3.332-1.79-4.5-4-4.5"/></g></svg>LinkedIn</h1>
        </div>
      </div>
    </div>
  );
};

export default Contact;
