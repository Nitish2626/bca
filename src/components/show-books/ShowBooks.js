import "./ShowBooks.css";
import download from "../../icons/download.png";

const ShowBooks=(props)=>{
    return (
        <div id="show-books">
            <img src={props.image} id="books-img"></img>
            <h3>{props.subject}</h3>
            <span>{props.size}{props.storage}</span>
            <a href={props.url} id="download-btn" download><img src={download} id="download-icon"></img></a>
        </div>
    );
}
export default ShowBooks;