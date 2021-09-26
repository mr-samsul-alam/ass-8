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
        <div>
            <div className="row">
                <div className="col-md-9">

                    <div className="row ">
                        {
                            persons.map(person =>


                                <Person
                                key={person.index}
                                    person={person}
                                    handleAddPerson={handleAddPerson}
                                >

                                </Person>
                            )
                        }

                    </div>
                    {/* akhane card add korbo  */}


                </div>
                <div className="col-md-3">
                    {/* akhane amra card calculation korbo  */}
                    <Cart
                        cart={cart}

                    ></Cart>

                </div>

            </div>
        </div>
    );
};

export default AllPerson;