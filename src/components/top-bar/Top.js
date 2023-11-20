import user from "../../icons/user-icon.png"
const Top = () => {
    return (
        <div className="w-full h-12 flex justify-end bg-slate-100 sticky top-0 px-2">

            <button className="flex flex-col items-center justify-center">

                <img src={user} className="w-5 h-6 mt-2"></img>

                <h1 className="text-lg text-ellipsis">Username</h1>

            </button>

        </div>
    );
}

export default Top;
