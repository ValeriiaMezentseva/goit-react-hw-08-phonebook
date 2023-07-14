import React, { useState, useEffect } from "react";
import { Loader } from "components/Loader/Loader";
import ContactsForm from "components/Form/Form";

const CreateContactPage = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 200);
    }, []);

    return (
        <>
            {isLoading ? <Loader /> : <ContactsForm />}
        </>
    );
}; 

export default CreateContactPage;