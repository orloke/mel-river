interface IntroOverlayProps {
  /* props go here */
}

export function IntroOverlay() {
  return (
    <>
      <div className='intro-overlay'>
        <div
          className='top'
          style={{
            height: "calc(var(--vh, 1vh)*50)",
          }}
        >
          <div className='overlay-top'></div>
          <div className='overlay-top !left-1/3 tablet:hidden'></div>
          <div className='overlay-top !left-2/3 tablet:hidden '></div>
        </div>
        <div
          className='bottom'
          style={{
            height: "calc(var(--vh, 1vh)*50)",
          }}
        >
          <div className='overlay-bottom'></div>
          <div className='overlay-bottom !right-1/3 !tablet:w-screen tablet:top-full tablet:!right-0 '></div>
          <div className='overlay-bottom !right-0 !tablet:w-screen tablet:top-[200%]  '></div>
        </div>
      </div>
    </>
  );
}
