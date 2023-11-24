// import './Loader.css';

const Loader = () => {
    return (
        <div className='w-40 h-40 flex items-center justify-center bg-blue-500'>
            <svg>
                <circle cx="50" cy="50" r="20" fill="transparent" strokeWidth={3} stroke="black" className='animate-[spin_1s_linear_infinite]'></circle>
            </svg>
        </div>
    );
    // strokeWidth={3} strokeDasharray={50} strokeDashoffset={80} stroke="black"
}
export default Loader;