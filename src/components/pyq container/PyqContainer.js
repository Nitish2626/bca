import Backbtn from "../back button/Backbtn";
import Loader from "../Loader/Loader";
import ShowBooks from "../show-books/ShowBooks";

const PyqContainer = (props) => {
    return (
        <div>
            <Backbtn />

            <h3 className={`${props.headingColor} text-center pt-10 text-lg mb-10 font-semibold`}>
                {props.subjectName}
            </h3>

            <section className="w-full flex items-center justify-center flex-wrap gap-10 pb-20">
                {props.loader ?
                    <Loader borderColor={props.loaderBorderColor} /> :
                    props.subject.map((i, index) => {
                        return <ShowBooks
                            key={index}
                            subject={`${i.subject} (${i.year})`}
                            size={i.size}
                            storage={i.storage}
                            url={i.url}
                            image={i.image_url}
                            color="text-blue-500"
                        />
                    })
                }
            </section>

        </div>
    );
}

export default PyqContainer;