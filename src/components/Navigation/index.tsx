import Link from "next/link";

interface NavigationProps {
  /* props go here */
}

export function Navigation() {
  return (
    <nav className="hidden left-0 top-[-1px] w-full h-full z-[1] fixed bg-light-yellow">
      <div className='container'>
        <div className='nav-columns'>
          <div className='nav-column'>
            <div className='nav-label'>Menu</div>
            <ul className='nav-links w-[55%] 654px:w-full '>
              <li>
                <Link className='relative group' href='/casesStudies'>
                  <span>Case Studies</span>
                  <span className='absolute w-0 h-0.5 block right-0 bg-black transition-all duration-[400ms] group-hover:w-full group-hover:left-0 group-hover:bg-black' />
                </Link>
              </li>
              <li>
                <Link className='relative group' href='/approach'>
                  <span>Approach</span>
                  <span className='absolute w-0 h-0.5 block right-0 bg-black transition-all duration-[400ms] group-hover:w-full group-hover:left-0 group-hover:bg-black' />
                </Link>
              </li>
              <li>
                <Link className='relative group' href='/services'>
                  <span>Services</span>
                  <span className='absolute w-0 h-0.5 block right-0 bg-black transition-all duration-[400ms] group-hover:w-full group-hover:left-0 group-hover:bg-black' />
                </Link>
              </li>
              <li>
                <Link className='relative group' href='/about'>
                  <span>About us</span>
                  <span className='absolute w-0 h-0.5 block right-0 bg-black transition-all duration-[400ms] group-hover:w-full group-hover:left-0 group-hover:bg-black' />
                </Link>
              </li>
            </ul>
          </div>
          <div className='nav-column'>
            <div className='nav-label'>Contact</div>
            <div className='nav-infos'>
              <ul className='nav-info'>
                <li className='nav-info-label'>Email</li>
                <li>
                  <Link className='relative group' href='/contact'>
                    <span>Get in touch with us</span>
                    <span className='absolute w-0 h-0.5 block right-0 bg-black transition-all duration-[400ms] group-hover:w-full group-hover:left-0 group-hover:bg-black' />
                  </Link>
                </li>
                <li>
                  <Link className='relative group' href='/audit'>
                    <span>Get a free audit</span>
                    <span className='absolute w-0 h-0.5 block right-0 bg-black transition-all duration-[400ms] group-hover:w-full group-hover:left-0 group-hover:bg-black' />
                  </Link>
                </li>
              </ul>
              <ul className='nav-info'>
                <li className='nav-info-label'>Headquarters</li>
                <li className='654px:hidden'>Route du Jura 49</li>
                <li className='654px:hidden'>1700 Fribourg</li>
                <li>Switzerland</li>
              </ul>
              <ul className='nav-info'>
                <li className='nav-info-label 654px:hidden'>Phone</li>
                <li className='654px:hidden'>+41 (0) 75 510 28 70</li>
              </ul>
              <ul className='nav-info'>
                <li className='nav-info-label 654px:hidden '>Legal</li>
                <li>Privacy and Cookies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
