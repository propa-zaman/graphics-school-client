import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import useSchool from "../../../hooks/useSchool";
import ClassCard from "../../Components/ClassCard/ClassCard";


const PopularClass = () => {
    const [school] = useSchool();
    const popular = school.filter(classes => classes.enrolled_students >= 50);
    
    return (
        <section className="mb-20">
            <SectionTitle
                heading="From Graphics School"
                subHeading="Popular Classes"
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popular.map(school => <ClassCard
                        key={school._id}
                        school={school}
                    ></ClassCard>)
                }
            </div>
        </section>
    );
};

export default PopularClass;