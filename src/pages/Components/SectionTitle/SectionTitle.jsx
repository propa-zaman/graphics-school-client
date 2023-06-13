import { motion } from 'framer-motion';

const SectionTitle = ({ heading, subHeading }) => {
  const titleVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeInOut'
      }
    }
  };

  return (
    <div className="mx-auto text-center mt-20 mb-20">
      <motion.p
        className="text-pink-600 mb-2 text-sm"
        initial="hidden"
        animate="visible"
        variants={titleVariants}
      >
        -------{subHeading}-------
      </motion.p>
      <motion.h3
        className="text-3xl uppercase font-bold border-b-2 pb-2 text-violet-950"
        initial="hidden"
        animate="visible"
        variants={titleVariants}
      >
        {heading}
      </motion.h3>
    </div>
  );
};

export default SectionTitle;
