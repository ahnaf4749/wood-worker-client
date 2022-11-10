import { useEffect } from "react"

const useTitels = title => {
    useEffect(() => {
        document.title = `${title} - Wood Works`;
    }, [title])
};

export default useTitels;