import React, { createContext, useState } from "react";

export const CatatanContext = createContext();

export const CatatanProvider = ({ children }) => {
    const [catatan, setCatatan] = useState([]);
    const [cari, setCari] = useState("");

    const tambah = (teks) => {
        setCatatan([...catatan, teks]);
    };

    const hapusSemua = () => {
        setCatatan([]);
    };

    const catatanFiltered = catatan.filter(c =>
        c.toLowerCase().includes(cari.toLowerCase())
    );

    const jumlah = catatan.length;

    return (
        <CatatanContext.Provider value={{
            catatan, catatanFiltered, jumlah, cari,
            tambah, hapusSemua, setCari
        }}>
            {children}
        </CatatanContext.Provider>
    );
};
