import Link from "next/link";

interface HeaderProps {
  /* props go here */
}

export function Header() {
  return (
    <div className='header'>
      <div className='container'>
        <div className='row v-center space-between'>
          <div className='logo'>
            <Link href='/'>AGENCY.</Link>
          </div>
          <div className='nav'>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}
