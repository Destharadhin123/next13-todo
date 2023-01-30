"use client";

import { useEffect } from "react";

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div>
            <p>Yah bro error</p>
            <button onClick={() => reset()}>reset error boundry</button>
        </div>
    );
}