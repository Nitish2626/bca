import './Loader.css';

const Loader = () => {
    return (
        <div className='w-40 h-40 flex items-center justify-center bg-gray'>
            <svg>
                <circle cx="50" cy="50" r="20" fill="transparent" className='stroke-black'></circle>
            </svg>
        </div>
    );
}
export default Loader;