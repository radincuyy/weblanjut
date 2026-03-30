import { useContext, useState } from "react";
import { CatatanContext } from "../context/CatatanContext";

const TambahCatatan = () => {
    const { tambah } = useContext(CatatanContext);
    const [teks, setTeks] = useState("");

    const handleTambah = () => {
        if (teks.trim()) {
            tambah(teks.trim());
            setTeks("");
        }
    };

    return (
        <div>
            <input
                value={teks}
                onChange={(e) => setTeks(e.target.value)}
                onKeyUp={(e) => e.key === "Enter" && handleTambah()}
                placeholder="Tulis catatan..."
            />
            <button onClick={handleTambah}>Tambah</button>
        </div>
    );
};

export default TambahCatatan;
