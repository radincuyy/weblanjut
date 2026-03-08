import React from "react";

const Header = ({ tampilkan }) => {
    return (
        <div style={{ 
            textAlign: "center"
        }}>
            <h1>Daftar Film Saya</h1>
            <p style={{ fontSize: "14px", color: "#555" }}>
                {tampilkan ? "Card Ditampilkan" : "Card Disembunyikan"}
            </p>
        </div>
    );
};

export default Header;
