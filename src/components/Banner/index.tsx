import { RightArrow } from "@/assets/arrow-right";
import Link from "next/link";

interface BannerProps {
  /* props go here */
}

export function Banner() {
  return (
    <section className='h-[50vh] h-[calc(var(--vh, 1vh)*50)] bg-white '>
      <div className='container'>
        <div className='flex flex-col justify-center'>
          <h2 className="text-[3rem] leading-[4.2rem] font-bold z-10 text-white mix-blend-difference">
            <div className='line'>
              <span>Creating unique brand is</span>
            </div>
            <div className='line'>
              <span>what we do.</span>
            </div>
          </h2>
          <div className='btn-row'>
            <Link href=''>
              More about us <RightArrow />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
