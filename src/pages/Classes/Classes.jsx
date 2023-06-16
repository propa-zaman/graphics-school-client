import React from 'react';
import img from '../../assets/banner/classes.jpg'
import Cover from '../Shared/Cover/Cover';
import useTitle from '../../hooks/useTitle';
import useSchool from '../../hooks/useSchool';
import ClassCard from '../Components/ClassCard/ClassCard';
import ClassTab from './ClassTab';

const Classes = () => {
    useTitle('Classes');
    const [school] = useSchool();
    const popular = school.filter(classes => classes.available_seats >= 0);
    return (
        <div>
            <Cover img={img} title="Our Classes"></Cover>

            <div className="grid md:grid-cols-2 gap-10 mt-20 mb-20">
                {
                    popular.map(school => <ClassTab
                        key={school._id}
                        school={school}
                    ></ClassTab>)
                }
            </div>
        </div>
    );
};

export default Classes;