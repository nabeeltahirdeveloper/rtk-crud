import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import shortid from "shortid";
import { add, unload, update } from "../store/features/ContactSlice";

const Form = () => {
    const loadedContact = useSelector((state) => state.contact.loadedValue);
    const [toggleSwitch, setToggleSwitch] = useState(true);
    const dispatch = useDispatch();
    const [contact, setContact] = useState({
        name: "",
        email: "",
    });

    // useEffect(() => {
    //     // setContact(loadedContact);
    //     console.log("abc");
    // }, []);

    useEffect(() => {
        setContact(loadedContact);
        setToggleSwitch(true);
    }, [loadedContact]);

    const inputHandler = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    };

    const clearContact = () => {
        setContact({ name: "", email: "", id: "" });
    };

    const addContact = () => {
        Object.assign(contact, { id: shortid.generate() });
        dispatch(add(contact));
        clearContact();
    };
    const updateContact = () => {
        dispatch(update(contact));
        clearContact();
        setToggleSwitch(false);
    };
    return (
        <div className="mx-auto my-4 max-w-3xl p-3 grid grid-cols-2 gap-5 bg-slate-200">
            <h2 className="text-4xl text-gray-800 col-span-2">
                Your Contact Details
            </h2>
            <div className="flex justify-center">
                <div className="mb-3 xl:w-96">
                    <label
                        htmlFor="name"
                        className="form-label inline-block mb-2 text-gray-700"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                        id="name"
                        placeholder="Your Name"
                        name="name"
                        value={contact.name}
                        onChange={inputHandler}
                    />
                </div>
            </div>
            <div className="flex justify-center">
                <div className="mb-3 xl:w-96">
                    <label
                        htmlFor="email"
                        className="form-label inline-block mb-2 text-gray-700"
                    >
                        Email
                    </label>
                    <input
                        type="text"
                        className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                        id="email"
                        placeholder="Your Email"
                        name="email"
                        value={contact.email}
                        onChange={inputHandler}
                    />
                </div>
            </div>
            <div className="col-span-2 flex justify-center">
                <button
                    className="px-4 py-1 rounded bg-slate-500 text-slate-50"
                    onClick={toggleSwitch ? updateContact : addContact}
                >
                    {toggleSwitch ? "Update Contact" : "Add Contact"}
                </button>
            </div>
        </div>
    );
};

export default Form;
