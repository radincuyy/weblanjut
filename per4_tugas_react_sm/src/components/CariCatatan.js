import { useContext } from "react";
import { CatatanContext } from "../context/CatatanContext";

const CariCatatan = () => {
    const { cari, setCari } = useContext(CatatanContext);

    return (
        <input
            value={cari}
            onChange={(e) => setCari(e.target.value)}
            placeholder="Cari catatan..."
        />
    );
};

export default CariCatatan;
