function ScheduleCallBtn({ text }: { text: string }) {
  return (
    <div className="w-full max-w-sm lg:max-w-[190px]">
      <button
        type="button"
        className="flex  w-full items-center justify-center rounded-lg bg-healHavenBrand600 px-5 py-3 text-white hover:bg-healHavenBrand900"
      >
        {text}
      </button>
    </div>
  );
}

export default ScheduleCallBtn;
