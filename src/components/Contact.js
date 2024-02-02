const Contact = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 items-center my-4 mx-20">
      <div>
        <img
          className=" w-[70%] ml-14 items-center ju"
          src="https://foodfire-app.netlify.app/Contact-Us.13c5d28a.png"
        ></img>
      </div>
      <div class="">
        <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center">
            Contact Us
          </h2>
          <p class="mb-8 lg:mb-16 font-light text-center">
            
          </p>
          <form action="#" class="space-y-8">
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                class="shadow-sm border border-gray-300  text-sm rounded-lg  w-full p-2.5 "
                placeholder="name@gmail.com"
                required
              />
            </div>
            <div>
              <label
                for="subject"
                class="block mb-2 text-sm font-medium"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                class="block p-3 w-full text-sm  rounded-lg border border-gray-300 shadow-sm "
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div class="sm:col-span-2">
              <label
                for="message"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                class="block p-2.5 w-full text-sm rounded-lg shadow-sm border border-gray-300 "
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              class="py-3 px-5 text-sm font-medium text-center rounded-lg bg-blue-500 "
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
