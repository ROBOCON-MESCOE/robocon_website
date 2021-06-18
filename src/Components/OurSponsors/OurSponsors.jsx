import React from 'react';
import Marquee from "react-fast-marquee";

const OurSponsors = () => {
    return (
        <div className="mb5">
            <h1 className="tc">Our Sponsors</h1>
            <div className="flex justify-center items-center flex-wrap mt5">
                <Marquee pauseOnClick={true}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7WLLQxT7M-194dgg1Wid3Fw_LCV1SfHv1ug&usqp=CAU" alt="logo" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7WLLQxT7M-194dgg1Wid3Fw_LCV1SfHv1ug&usqp=CAU" alt="logo" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7WLLQxT7M-194dgg1Wid3Fw_LCV1SfHv1ug&usqp=CAU" alt="logo" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7WLLQxT7M-194dgg1Wid3Fw_LCV1SfHv1ug&usqp=CAU" alt="logo" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7WLLQxT7M-194dgg1Wid3Fw_LCV1SfHv1ug&usqp=CAU" alt="logo" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7WLLQxT7M-194dgg1Wid3Fw_LCV1SfHv1ug&usqp=CAU" alt="logo" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7WLLQxT7M-194dgg1Wid3Fw_LCV1SfHv1ug&usqp=CAU" alt="logo" />
                </Marquee>
            </div>
        </div>
    )
}

export default OurSponsors;