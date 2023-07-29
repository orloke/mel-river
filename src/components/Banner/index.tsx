import { RightArrow } from "@/assets/arrow-right";
import Link from "next/link";

interface BannerProps {
  /* props go here */
}

export function Banner() {
  return (
    <section
      className='h-[50vh] bg-white '
      style={{
        height: "calc(var(--vh, 1vh)*50)",
      }}
    >
      <div className='container'>
        <div className='row flex flex-col justify-center'>
          <h2 className='text-[3rem] leading-[4.2rem] font-bold z-10 text-white mix-blend-difference tablet:text-[2.4rem] tablet:leading-[3rem] phone:mt-[72px] phone:text-[1.7rem] phone:leading-[2.2rem] '>
            <div className='line'>
              <span>Creating unique brand is</span>
            </div>
            <div className='line'>
              <span>what we do.</span>
            </div>
          </h2>
          <div className='btn-row w-64 relative z-[2] '>
            <Link
              href=''
              className='text-[1.6rem] text-black flex items-center font-semibold tablet:text-[1.3rem] phone:text-[1.1rem] group '
            >
              More about us{" "}
              <span className="flex items-center justify-center ml-4 border-2 border-black p-3 rounded-full transition-all duration-[400ms] ease-in-out tablet:p-1.5 tablet:w-5 tablet:h-5 phone:p-1 phone:w-4 phone:h-4 group-hover:bg-black">
                <RightArrow className='text-black group-hover:text-white h-6 w-6 transition-all duration-[400ms] ease-in-out ' />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
