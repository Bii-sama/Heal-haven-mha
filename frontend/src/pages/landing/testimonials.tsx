import { useRef, useState, useLayoutEffect } from 'react';

const testimonialsData = [
  {
    name: 'Fatima Al-Mansoori',
    imgUrl:
      'https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJlYXV0aWZ1bCUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
    quote:
      'Finding a therapist who gets the nuances of my culture was always a challenge. Thanks to HealHaven, I now have a safe space where I feel truly seen and heard.',
    profession: 'Teacher',
    id: 'testimonial1873782',
  },
  {
    name: 'Aiden Lee',
    imgUrl:
      'https://plus.unsplash.com/premium_photo-1658527200977-60838ec5e428?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJlYXV0aWZ1bCUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
    quote:
      "I was skeptical about online therapy, but HealHaven proved me wrong. My therapist is not only skilled but also resonates with my life experiences. It's been a game-changer.",
    profession: 'Software Engineer',
    id: 'testimonial19838s',
  },
  {
    name: 'Maria Gonzalez',
    imgUrl:
      'https://images.unsplash.com/photo-1482849297070-f4fae2173efe?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhdXRpZnVsJTIwcGVvcGxlfGVufDB8fDB8fHww',
    quote:
      "HealHaven connected me with a therapist who truly understands my cultural background. It's been a transformative experience, and I've never felt more understood",
    profession: 'Graphic Gonzalez',
    id: 'testimonial106s5',
  },
];

function Testimonials() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [slideWidth, setSlideWidth] = useState<number | null>(null);
  const ulRef = useRef<HTMLUListElement>(null);

  useLayoutEffect(() => {
    function handleResize() {
      if (ulRef.current) {
        const { width } = ulRef.current.getBoundingClientRect();
        setSlideWidth(width);
      }
    }

    // Initial calculation of slideWidth
    handleResize();

    // Attach event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [ulRef]);

  return (
    <section>
      <div className="healHavenContainer py-16 lg:py-24">
        <div className=" h-[468px]  overflow-hidden rounded-xl bg-healHavenBrand200 py-9 md:h-[360px] lg:h-[270px]">
          <ul
            ref={ulRef}
            className="relative h-full  transition-transform duration-300"
            style={{ transform: `translateX(${-activeSlide * 100}%)` }}
          >
            {testimonialsData.map((d, i) => {
              const leftPosition = slideWidth ? slideWidth * i : 0;
              return (
                <li
                  key={d.id}
                  className="absolute flex  w-full flex-col-reverse items-center justify-center gap-6 px-1  lg:flex-row lg:gap-8 lg:px-8"
                  style={{
                    left: `${leftPosition}px`,
                  }}
                >
                  <div className="flex w-[16.25rem] flex-col items-center gap-4 text-center">
                    <img
                      src={d.imgUrl}
                      alt=""
                      className="h-24 w-24 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-lg font-medium text-healHavenGray900">
                        {d.name}
                      </h3>
                      <p>{d.profession}</p>
                    </div>
                  </div>
                  <div className="text-center lg:max-w-[53.75rem] lg:text-left">
                    <p className="text-xl text-healHavenGray700 lg:text-3xl">
                      {d.quote}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="mt-2 flex justify-center gap-1">
            {Array.from({ length: testimonialsData.length }).map((_, i) => {
              return (
                <button
                  // eslint-disable-next-line react/no-array-index-key
                  key={`activeBtn${i}`}
                  type="button"
                  className={`h-4 w-4 rounded-full transition-colors duration-300 ${
                    i === activeSlide ? 'bg-healHavenBrand700' : 'bg-white'
                  }`}
                  onClick={() => setActiveSlide(i)}
                >
                  <span className="sr-only">first testimonial</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
