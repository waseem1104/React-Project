import React from "react";

// Form

export default function Form({setInput,nameBtn,placeholder}) {


    const handleSubmit = (event) => {
        event.preventDefault();
        let getInput =  event.target.data.value;
        setInput(getInput);

    };

    return (

        <>
            <form onSubmit={handleSubmit}>
                <div className="container pt-3 pb-3">
                    <input type="text" className="form-control" placeholder={placeholder} name="data" />
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-primary mt-2">{nameBtn}</button>
                    </div>
                </div>
            </form>

        </>

    );

}

