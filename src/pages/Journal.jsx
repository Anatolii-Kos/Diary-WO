import {Link} from "react-router-dom";

const Journal = () => {
    return (
        <>
            <div className="">
                    <Link to="/newWO">
                        <div className='bg-gray-700 my-4 h3 px-3 justify-between row '>
                            <div className='col-2'>WorkOut</div>
                            <div className ='col-1 text-end pe-3 text-gray-400 hover:text-orange-700' >+</div>
                        </div>
                    </Link>
                <div className="text-sm px-8">
                    Now is empty
                </div>
            </div>

            <div className="">
                    <Link to="/newWO">
                        <div className='bg-gray-700 my-4 h3 px-3 justify-between row '>
                            <div className='col-11'>Programs</div>
                            <div className ='col-1 text-end pe-3 text-gray-400 hover:text-orange-700' >+</div>
                        </div>
                    </Link>
                <div className="text-sm px-8">
                    Now is empty
                </div>
            </div>

            <div className="">
                    <Link to="/newWO">
                        <div className='bg-gray-700 my-4 h3 px-3 justify-between row '>
                            <div className='col-11'>Body measurements</div>
                            <div className ='col-1 text-end pe-3 text-gray-400 hover:text-orange-700' >+</div>
                        </div>
                    </Link>
                <div className="text-sm px-8">
                    Now is empty
                </div>
            </div>



        </>
    );
};

export default Journal;
