import React, { useEffect, useState } from 'react';
import Person from '../Person/Person';
import Cart from '../Cart/Cart';

const AllPerson = () => {
    const [persons, setPerson] = useState([])
    // cart a add korar jonno state
    const [cart, setCart] = useState([])
    
    const handleAddPerson = (person) => {
        const newPerson = [...cart, person]
        setCart(newPerson)
    }

    useEffect(() => {
        fetch("/fakePersondb.json")
            .then(res => res.json())
            .then(data => setPerson(data))
    }, [])
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-9">

                    <div className="row ">
                        {
                            persons.map(person =>


                                <Person
                                    key={person.key}
                                    person={person}
                                    handleAddPerson={handleAddPerson}
                                >

                                </Person>
                            )
                        }

                    </div>
                    {/* akhane cart add korbo  */}


                </div>
               
                <div className="col-md-3">
                    <Cart
                        cart={cart}

                    ></Cart>

                </div>

            </div>
        </div>
    );
};

export default AllPerson;