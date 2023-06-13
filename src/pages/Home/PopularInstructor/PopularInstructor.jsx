import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import useSchool from "../../../hooks/useSchool";
import InstructorCard from "../../Components/InstructorCard/InstructorCard";



const PopularInstructor = () => {
    const [school] = useSchool();
    const popular = school.filter(classes => classes.enrolled_students >= 50);
    
    return (
        <section className="mb-20">
            <SectionTitle
                heading="From Graphics School"
                subHeading="Popular Instructors"
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popular.map(school => <InstructorCard
                        // key={item._id}
                        school={school}
                    ></InstructorCard>)
                }
            </div>
        </section>
    );
};

export default PopularInstructor;