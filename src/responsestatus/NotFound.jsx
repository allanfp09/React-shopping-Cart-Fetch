import React, { Fragment } from 'react';

const NotFound = () => {
    return (
        <Fragment>
            <div className="text text-center bg-slate-100 p-5 mt-[50px]">
                <div>
                    <h1 className="text-[40px] font-bold text-gray-400">
                        Error 404
                    </h1>
                    <p className="text-gray-600">Data could not be found</p>
                </div>
            </div>
        </Fragment>
    );
};

export default NotFound;
