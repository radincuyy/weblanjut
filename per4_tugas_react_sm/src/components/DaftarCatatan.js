import { useContext } from "react";
import { CatatanContext } from "../context/CatatanContext";

const DaftarCatatan = () => {
    const { catatanFiltered } = useContext(CatatanContext);

    return (
        <div>
            {catatanFiltered.length === 0 && <p>Belum ada catatan.</p>}
            <ul>
                {catatanFiltered.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default DaftarCatatan;
