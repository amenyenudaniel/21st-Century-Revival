const About = () => {
  return (
    <section className="padding" id="about">
      <h1 className="text-center lg:text-[80px] sm:text-[50px] xs:text-[30px] text-[23px] italic font-bold mb-[1rem]">
        About Us
      </h1>

      <div className="flex md:flex-row flex-col items-center justify-between gap-[2rem]">
        <div className="flex flex-col gap-[1px] items-center">
          <img src={"/logo.jpg"} alt="logo" className="w-[500px]" />
          <h2 className="sm:text-[25px] text-[18px] font-bold">
            21st Century Revival
          </h2>
        </div>
        <div className="w-full">
          <p className="italic lg:text-[1.5rem] text-[1.2rem] mb-[2rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, distinctio totam quaerat ea illo beatae fugiat
            mollitia animi saepe delectus natus aliquam, ipsum commodi laborum
            quam cumque quas dicta quos! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Necessitatibus, distinctio totam quaerat ea illo
            beatae fugiat mollitia animi saepe delectus natus aliquam, ipsum
            commodi laborum quam cumque quas dicta quos! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Necessitatibus, distinctio totam
            quaerat ea illo beatae fugiat mollitia animi saepe delectus natus
            aliquam, ipsum commodi laborum quam cumque quas dicta quos!
          </p>
          <a href="https://www.buymeacoffee.com/21stCentRev">
            <button
              type="button"
              className="bg-black text-white px-5 py-2 rounded-[10px] text-[18px] transition hover:text-black hover:border hover:border-black hover:bg-white sm:mx-0 mx-auto sm:block flex"
            >
              Donate
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
