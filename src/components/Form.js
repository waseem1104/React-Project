import React from "react";



export default function Form({setCity}) {


    const handleSubmit = (event) => {
        event.preventDefault();
        let getCity =  event.target.city.value;
        setCity(getCity);

    }

    return (

        <>
            <form onSubmit={handleSubmit}>
                <div className="pt-3 pb-3">
                    <input type="text" className="form-control" placeholder="London" name="city" />
                    <button className="btn btn-primary mt-2">Obtenir la météo</button>
                </div>
            </form>





        </>

    );

}

