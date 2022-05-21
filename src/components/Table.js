import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove, load } from "../store/features/ContactSlice";

const Table = () => {
    const contact = useSelector((state) => state.contact.value);
    const dispatch = useDispatch();

    const removeContact = (id) => {
        dispatch(remove(id));
    };

    const loadContact = (contact) => {
        dispatch(load(contact));
    };
    return (
        <div className="Table max-w-3xl bg-slate-200 my-3 mx-auto p-8">
            {contact.map((contact) => {
                return (
                    <div className="card bg-slate-50 mb-4 p-6 rounded-xl shadow flex justify-between items-center">
                        <div className="space-y-2">
                            <h2 className="text-2xl text-slate-900">
                                Name : {contact.name}
                            </h2>
                            <h3 className="text-xl text-slate-700">
                                Email : {contact.email}
                            </h3>
                        </div>
                        <h3>id: {contact.id}</h3>
                        <div className="space-x-4">
                            <button className="p-3 bg-slate-300 rounded-md hover:shadow-lg transition-all ease-linear">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    onClick={() => loadContact(contact)}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                    />
                                </svg>
                            </button>
                            <button
                                className="p-3 bg-slate-300 rounded-md hover:shadow-lg transition-all ease-linear"
                                onClick={() => removeContact(contact.id)}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Table;
