import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/featured/featured.png';
import './Featured.css';

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-8 my-20">
      <SectionTitle subHeading="Alumni Success" heading="Featured Alumni" />
      <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36 relative">
        <div className="md:w-1/2 relative">
          <img src={featuredImg} alt="" className="md:w-full md:h-auto mx-auto rounded-lg" style={{ maxWidth: '500px' }} />
          <div className="absolute top-0 left-0 w-40 h-40 bg-white opacity-10 rounded-full -ml-16 -mt-16"></div>
          <div className="absolute top-0 right-0 w-20 h-20 bg-white opacity-10 rounded-full -mr-10 -mt-10"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mb-16"></div>
        </div>
        <div className="md:w-1/2 md:ml-10 mt-6 md:mt-0">
          <p className="text-gray-400 text-sm">Aug 20, 2023</p>
          <h3 className="text-2xl font-semibold mb-4 uppercase">Career as a Designer</h3>
          <p className="text-white mb-4">Graphic designers are the visual storytellers who bring ideas to life. They combine their artistic skills, technical knowledge, and problem-solving abilities to create impactful designs that engage, inform, and inspire. They carefully select colors, typography, imagery, and layout to communicate messages effectively and evoke emotions in the audience.</p>
        </div>
      </div>
    </div>
  );
};

export default Featured;
