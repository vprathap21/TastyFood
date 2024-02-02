// Footer component for footer section
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="flex text-lg  flex-wrap justify-center items-center  rounded-md bg-blue-200 p-2">
      <span>Made with love ❤️ by </span>

      <a
        href="https://www.linkedin.com/in/prathap-v-751566249/"
        target="_blank"
        title="prathap's Linkedin Profile"
      >
        <span className="px-1 font-bold text-blue-800 hover:text-orange-600">
          {" "}
          Prathap
        </span>
      </a>

      <span className="px-1">© {year}</span>
      <strong>
        <span className=""><span className="px text-red-700">Red</span> Food</span>
      </strong>
    </div>
  );
};

export default Footer;
