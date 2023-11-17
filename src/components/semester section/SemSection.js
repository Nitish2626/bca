import ShowBooks from "../show-books/ShowBooks";

const SemSection=(props)=>{
    return(
        <>
            <h2 className="text-center text-green-500 pt-14 pb-3 text-xl font-semibold">{props.sem}</h2>

            <section className={`flex items-center justify-center flex-wrap gap-4 ${props.mb}`}>

                {props.book.map((i,index)=>{
                   return <ShowBooks key={index} subject={i.subject} size={i.size} storage={i.storage} url={i.url} image={i.image_url} />
                })}

            </section>
        </>
    );
};

export default SemSection;