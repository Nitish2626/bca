const Section = (props) => {
    return (
        <>
            <section className="w-11/12 flex items-center justify-evenly gap-2">

                <img src={props.src} className="w-6 h-6"></img>

                <input type={props.type} id={props.id} className={`w-11/12 h-10 text-green-500 text-xl rounded-md px-2 ${props.outlineColor} shadow-[2px_2px_10px_0px_grey]`} placeholder={props.placeholder} onChange={props.change} value={props.value}></input>

            </section>

            <span className="text-red-600 mb-4">{props.span}</span>

        </>
    );
};

export default Section;