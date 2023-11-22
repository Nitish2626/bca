import CourseCard from "../course card/CourseCard";

const Sem = (props) => {
    return (
        <>
            <h2 className="text-center text-green-400 rounded-lg pt-14 pb-5 text-xl font-bold">
                {props.sem}
            </h2>

            <section className={`flex items-center justify-center flex-wrap gap-4 ${props.mb}`}>

                {props.sub.map((i, index) => {
                    return <CourseCard key={index} link={i.link} name={i.name} bgcolor={i.bgcolor} />
                })}

            </section>
        </>
    );
};

export default Sem;
