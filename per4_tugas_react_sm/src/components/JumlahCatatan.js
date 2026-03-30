import { useContext } from "react";
import { CatatanContext } from "../context/CatatanContext";

const JumlahCatatan = () => {
    const { jumlah } = useContext(CatatanContext);
    return <p>Total catatan: <strong>{jumlah}</strong></p>;
};

export default JumlahCatatan;
