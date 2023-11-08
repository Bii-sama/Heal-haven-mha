interface ScheduleCallBtnProps {
  text: string;
  bgColor?: string;
  color?: string;
}

function ScheduleCallBtn({
  text,
  bgColor = 'bg-healHavenBrand600',
  color = 'text-white',
}: ScheduleCallBtnProps) {
  return (
    <div className="w-full max-w-sm lg:max-w-[190px]">
      <a
        href="https://calendly.com/healhaventherapist/30min"
        target="_blank"
        rel="noreferrer"
        className={` ${bgColor} flex  w-full items-center justify-center rounded-lg  px-5 py-3 ${color} ${
          bgColor === 'bg-White'
            ? 'border border-solid border-healHavenGray700 hover:bg-healHavenGray100 '
            : 'hover:bg-healHavenBrand900'
        } `}
      >
        {text}
      </a>
    </div>
  );
}

export default ScheduleCallBtn;
