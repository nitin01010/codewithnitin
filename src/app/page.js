import HeroSection from "@/components/UI/heroSection";
import JavaScript from "@/../public/JavaScript.png";
import ReactJSImg from "@/../public/React.png";
import NextJsImg from "@/../public/NexJs.png";

const Carousel = ({ name, color, imgUrl }) => {
  return (
    <div className="p-1 rounded-xl min-w-[300px] h-[220px]" style={ { backgroundColor: `#${color}` } }>
      {/* Directly reference the image path from the public directory */ }
      <img src={ imgUrl } className="object-cover ml-6 mt-11" alt="Placeholder" />
      <h1 className="ml-6 mt-2 font-bold text-3xl text-black">{ name }</h1>
    </div>
  )
}

const SkillSection = ({ data }) => {
  return (
    <div className=" border-slate-800  min-w-[300px]    border p-4 w-[400px] md:w-[305px] rounded-md">
      <h1 className=" text-2xl font-semibold ">{ data.title }</h1>
      <br />
      <div className="flex flex-col  gap-2">
        {
          data.skills.map((skill, index) => {
            return (
              <div key={ index }>
                <p className="cursor-pointer hover:font-bold transition ease-linear delay-75  text-lg  ">{ skill }</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}



export default function Home() {
  return (
    <main>
      <div className="p-1 transition ease-linear flex w-[95%] lg:w-[75%] flex-wrap items-center flex-col-reverse  lg:flex-row lg:flex-nowrap justify-center  text-white mt-5 m-auto">
        <HeroSection />
        <img src="https://media.licdn.com/dms/image/D5635AQHMUA-UI2awJA/profile-framedphoto-shrink_200_200/0/1720000252404?e=1721052000&v=beta&t=dp6SO7jel6fAi6J4IZ0xOLSbigDVueRpfYLnnTjuvSU" className=" object-cover rounded-full  h-64   " alt="Placeholder" />
      </div>

      <div className=" text-white mt-[10%] flex relative w-[100%] md:w-[77%] flex-wrap md:flex-nowrap m-auto ">
        <div className="p-4 py-4 ">
          <p>1 years of</p>
          <h1 className=" text-4xl font-bold">XP</h1>
          <p className=" text-white">with the most popular ecosystem <br />
            frontend</p>
        </div>
        <div className="p-2 w-[100%] flex gap-10 overflow-x-scroll" id="Hidde">
          <Carousel name="JavaScript" color="C3C99E" imgUrl="/JavaScript.png" />
          <Carousel name="React" color="7D9CA5" imgUrl="/React.png" />
          <Carousel name="Next.js" color="C2C2C2" imgUrl="/NexJs.png" />
        </div>
      </div>

      <div className=" py-4 p-4 flex flex-col relative  gap-10 justify-center items-center mt-[7%] w-[95%] lg:w-[75%] m-auto  ">
        <h1 className=" text-4xl font-bold text-[#C69AFF]">Javascript</h1>
        <h1 className=" text-4xl font-bold text-[#9F53FF]">React</h1>
        <h1 className=" text-4xl font-bold text-[#6104D6]">Coffee</h1>
      </div>



      <div className=" py-4 p-4 flex flex-col gap-10 justify-start  mt-[7%] w-[95%] lg:w-[75%] m-auto text-white">
        <p className=" text-2xl md:text-4xl">These are the <br />
          technologies I’ve been using</p>
      </div>

      <div className=" py-4 p-4 flex  overflow-x-scroll justify-around  md:flex-nowrap gap-7   shadow-sm  mt-[3%]  w-[95%] lg:w-[90%] m-auto text-white" id="Hidde">
        <SkillSection data={ { title: 'Front-end', skills: ['Html', 'Css', 'JavaScript', 'React', 'TailwindCss', 'Redux', 'ReactQueary'] } } />
        <SkillSection data={ { title: 'Backend', skills: ['Node', 'Express', 'Mongodb', 'Jwt', 'Cookie', 'Jwt'] } } />
        <SkillSection data={ { title: 'Cloud', skills: ['Aws', 'Render', 'Vercel',] } } />
        <SkillSection data={ { title: 'Tools', skills: ['Figma', 'Jira', 'chatGPT', 'MUI', 'Ant Desing', 'Chakra UI'] } } />
      </div>


    </main>
  );
}
