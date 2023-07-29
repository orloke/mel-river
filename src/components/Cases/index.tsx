import { ArrowLeft } from "@/assets/arrow-left";
import { RightArrow } from "@/assets/arrow-right";
import Image from "next/image";

interface CasesProps {
  /* props go here */
}

const caseStudies = [
  {
    id: 1,
    subtitle: "Curology",
    title: "A custom formula for your skin's unique needs",
    img: "curology-min",
  },
  {
    id: 2,
    subtitle: "Yourspace",
    title: "Open space floor plans for you next venture",
    img: "yourspace-min",
  },
  {
    id: 3,
    subtitle: "Lumin",
    title: "For your best look ever",
    img: "lumin-min",
  },
];

export function Cases() {
  return (
    <section
      className='cases h-[50vh] '
      style={{
        height: "calc(var(--vh, 1vh)*50)",
      }}
    >
      <div className='container-fluid'>
        <div className='cases-navigation absolute bottom-0 w-full flex justify-between items-center z-[6] p-8 box-border tablet:hidden '>
          <button disabled className='cases-arrow prev'>
            <ArrowLeft />
          </button>
          <button className='cases-arrow next'>
            <RightArrow />
          </button>
        </div>
        <div className='row tablet:flex-col'>
          {caseStudies.map(caseItem => (
            <div
              key={caseItem.id}
              className='case relative w-1/3 tablet:w-full bg-black cursor-pointer group '
            >
              <div
                className='case-details h-[50vh] flex flex-col justify-center p-8 box-border z-[1] relative tablet:w-screen phone:p-4 '
                style={{
                  height: "calc(var(--vh, 1vh)*50)",
                }}
              >
                <span className='mt-[156px] text-[1.6rem] opacity-80 text-white font-semibold betweenTabletAndDesktop:text-[1.4rem] phone:text-[1.2rem] phone:leading-[2.2rem] '>
                  {caseItem.subtitle}
                </span>
                <h2 className='text-[2.4rem] leading-[3.4rem] w-[85%] mt-4 text-white betweenTabletAndDesktop:text-[2rem] betweenTabletAndDesktop:leading-[2.4rem] phone:text-[1.7rem] phone:leading-[2.2rem] phone:mt-2 '>
                  {caseItem.title}
                </h2>
              </div>
              <div className='case-image group-hover:opacity-40 top-0 left-0 w-full h-full absolute overflow-hidden opacity-60 transition-all duration-[400ms] ease-[cubic-bezier(0.6,-0.05,0.1,0.99)] '>
                <Image
                  src={require(`../../assets/${caseItem.img}.png`)}
                  alt={caseItem.title}
                  className='h-full w-full object-cover '
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
