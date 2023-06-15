import React from 'react';
import Cover from '../Shared/Cover/Cover';
import img from '../../assets/banner/instructors.jpg'
import useSchool from '../../hooks/useSchool';
import InstructorCard from '../Components/InstructorCard/InstructorCard';
import useTitle from '../../hooks/useTitle';

const Instructors = () => {
    useTitle('Instructors')
    const [school] = useSchool();
    const popular = school.filter(classes => classes.enrolled_students >= 20);
    return (
        <div>
            <Cover img={img} title="Our Instructors"></Cover>

            <div className="grid md:grid-cols-2 gap-10 mt-20 mb-20">
                {
                    popular.map(school => <InstructorCard
                        key={school._id}
                        school={school}
                    ></InstructorCard>)
                }
            </div>
            
        </div>
    );
};

export default Instructors;