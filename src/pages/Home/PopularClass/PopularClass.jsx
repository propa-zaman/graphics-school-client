import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import useSchool from "../../../hooks/useSchool";
import ClassCard from "../../Components/ClassCard/ClassCard";


const PopularClass = () => {
    const [school] = useSchool();
    const popular = school.filter(classes => classes.category === 'popular');
    
    return (
        <section className="mb-12">
            <SectionTitle
                heading="From Graphics School"
                subHeading="Popular Classes"
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popular.map(school => <ClassCard
                        // key={item._id}
                        school={school}
                    ></ClassCard>)
                }
            </div>
        </section>
    );
};

export default PopularClass;