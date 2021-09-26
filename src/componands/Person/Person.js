import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import './Person.css'


const Person = (props) => {
    const { name, picture, designation, company, gender, honorarium } = props.person;
    const element = <FontAwesomeIcon icon={faUser} />
    return (
        <div className ="col-md-4 ">
            <div className="card mb-3 ">
                <div className="col g-0">
                    <img src={picture} className=" avatar rounded-circle mt-4
                        card-img-top " style={{ "width": "200px" }} alt="..." />
                    <div className="card-body ">
                        <h2 className="card-title">Name: {name}</h2>
                        <h4>Designation: {designation}</h4>
                        <h5>Company: {company}</h5>
                        <h6>Gender: {gender}</h6>
                        <h6>Honorarium:${honorarium}</h6>
                        <button onClick={() => props.handleAddPerson(props.person)} className="btn btn-primary">{element} Invite</button>
                    </div>

                </div>

            </div>
        </div>

    );
};

export default Person;