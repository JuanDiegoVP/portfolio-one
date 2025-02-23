import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Image from "next/image";
import deved from "../../public/dev-ed-wave.png";
import design from "../../public/design.png";
import code from "../../public/code.png";
import consulting from "../../public/consulting.png";
import web1 from "../../public/web1.png";
import web2 from "../../public/web2.png";
import web3 from "../../public/web3.png";
import web4 from "../../public/web4.png";
import web5 from "../../public/web5.png";
import web6 from "../../public/web6.png";

export default function Home() {
  return (
    <div>
      <main className="bg-white px-10 md:px-20 lg:px-40">
        <section className=" min-h-screen">
          <nav className="flex justify-between py-10 mb-12">
            <h1 className={` text-xl`}>Debelopedbyed</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer" />
              </li>
              <li>
                <a
                  className={` bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8`}
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 ">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Hi, I&apos;m Diego Vargas
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl">Front-End Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-lg max-w-xl mx-auto">
              I am passionate about software development, looking to improve my
              skills and positively impact the projects I participate in.{" "}
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillLinkedin className="cursor-pointer" />
            <AiFillGithub className="cursor-pointer" />
          </div>
          <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mx-auto mt-20 overflow-hidden md:h-96 md:w-96">
            <Image
              src={deved}
              alt="profile-avatar"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1">My Projects</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              Here are some of my projects
            </p>
            <p className="text-md py-2 leading-8 text-gray-800">
              I offer from a wide range of services, including programming and
              teaching.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className=" text-center shadow-lg p-10 rounded-xl my-10">
              <Image
                src={design}
                width={100}
                height={100}
                alt="code logo"
                className="inline-block"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">
                I offer from a wide range of services, including programming and
                teaching.
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Adobe XD</p>
              <p className="text-gray-800 py-1">Sketch</p>
            </div>
            <div className=" text-center shadow-lg p-10 rounded-xl my-10">
              <Image
                src={code}
                width={100}
                height={100}
                alt="code logo"
                className="inline-block"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">
                I offer from a wide range of services, including programming and
                teaching.
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Adobe XD</p>
              <p className="text-gray-800 py-1">Sketch</p>
            </div>
            <div className=" text-center shadow-lg p-10 rounded-xl my-10">
              <Image
                src={consulting}
                width={100}
                height={100}
                alt="code logo"
                className="inline-block"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">
                I offer from a wide range of services, including programming and
                teaching.
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Adobe XD</p>
              <p className="text-gray-800 py-1">Sketch</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1">Portfolio</h3>
            <p className="py-2">
              I offer from a wide range of services, including programming and
              teaching.
            </p>
            <h4 className="py-4 text-teal-600">Design tools I use</h4>
            <p className="text-gray-800 py-1">Figma</p>
            <p className="text-gray-800 py-1">Adobe XD</p>
            <p className="text-gray-800 py-1">Sketch</p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="basis-1/3 flex-1">
              <Image src={web1} alt="web1" className="rounded-lg object-cover" style={{height:"100%", width:"100%"}}/>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web2} alt="web2" className="rounded-lg object-cover" style={{height:"100%", width:"100%"}}/>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web3} alt="web3" className="rounded-lg object-cover" style={{height:"100%", width:"100%"}}/>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web4} alt="web4" className="rounded-lg object-cover" style={{height:"100%", width:"100%"}}/>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web5} alt="web5" className="rounded-lg object-cover" style={{height:"100%", width:"100%"}}/>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web6} alt="web6" className="rounded-lg object-cover" style={{height:"100%", width:"100%"}}/>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
