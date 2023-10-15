type MenuButtonProps = {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

function MenuButton({ openMenu, setOpenMenu }: MenuButtonProps) {
  return (
    <button
      type="button"
      className="space-y-1"
      onClick={() => setOpenMenu((m) => !m)}
    >
      <span
        className={`block h-[2px] w-8 bg-black ${
          openMenu ? 'translate-y-[10px] -rotate-45' : 'translate-y-0 rotate-0'
        } transition-all duration-300 ease-in-out`}
      />
      <span
        className={`block h-[2px] w-5 bg-black ${
          openMenu
            ? 'translate-y-[10px] opacity-0'
            : 'translate-y-0 opacity-100'
        } transition-all duration-300 ease-in-out`}
      />
      <span
        className={`block h-[2px] w-7 bg-black ${
          openMenu ? 'rotate-45' : 'rotate-0'
        } transition-all duration-300 ease-in-out`}
      />
    </button>
  );
}

export default MenuButton;
