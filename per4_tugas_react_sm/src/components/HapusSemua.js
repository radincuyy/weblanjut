import { useContext } from "react";
import { CatatanContext } from "../context/CatatanContext";

const HapusSemua = () => {
    const { hapusSemua, jumlah } = useContext(CatatanContext);
    return <button onClick={hapusSemua} disabled={jumlah === 0}>Hapus Semua</button>;
};

export default HapusSemua;
