import React from "react";

const Button = ({ tampilkan, onToggle }) => {
    return (
        <div>
            <button 
            style={{
                backgroundColor: tampilkan ? "green" : "red",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "16px"
            }}
            onClick={onToggle}>
                {tampilkan ? "Sembunyikan Card" : "Tampilkan Card"}
            </button>
        </div>
    );
};

export default Button;