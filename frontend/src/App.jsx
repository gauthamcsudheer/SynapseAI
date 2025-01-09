import React, { useEffect, useState } from "react";
import { getSampleData } from "./api/api";

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getSampleData();
                setData(result);
            } catch (error) {
                console.error("Error:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Synapse Frontend</h1>
            <p>Backend Response: {data ? JSON.stringify(data) : "Loading..."}</p>
        </div>
    );
}

export default App;
