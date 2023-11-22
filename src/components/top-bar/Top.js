import { useState } from "react";
import user from "../../icons/user-icon.png";

const Top = () => {

    const [show, setShow] = useState(false);

    return (
        <>
            <div className="w-full h-12 flex items-center justify-end bg-slate-100 sticky top-0 px-1">

                <button className="flex flex-col items-center justify-center bg-slate-300 rounded-md px-2 hover:bg-slate-200" onClick={()=>{setShow((prev)=>!prev)}}>

                    <img src={user} className="w-5 h-5"></img>

                    <h1 className="text-lg overflow-hidden text-ellipsis">Username</h1>

                </button>

            </div>

            {show && <button className="w-20 h-9 fixed mt-1 right-3 bg-blue-400 text-white rounded-md text-lg shadow-[1px_1px_10px_0px_grey] hover:text-blue-400 hover:bg-white">
                Logout
            </button>
            }

        </>
    );
}

export default Top;
