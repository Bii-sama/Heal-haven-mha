import ellipse3 from '@/assets/ellipse-3.png';
import ellipse2 from '@/assets/ellipse-2.png';
import ellipse1 from '@/assets/ellipse-1.png';

function FindTherapist() {
  return (
    <section className="">
      <div>
        <img
          src={ellipse3}
          alt=""
          className="absolute -top-8 left-0 z-0 md:-top-12"
        />
        <img
          src={ellipse2}
          alt=""
          className="absolute -top-4 left-0 z-[-1]  md:-top-8"
        />
        <img
          src={ellipse1}
          alt=""
          className="absolute left-0 top-0 z-[-2] md:-top-4"
        />
      </div>
      <div className="healHavenContainer">Find Therapists</div>
    </section>
  );
}

export default FindTherapist;
