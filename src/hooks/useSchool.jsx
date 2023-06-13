import { useEffect, useState } from "react";

const useSchool = () => {
    const [school, setSchool] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('school.json')
            .then(res => res.json())
            .then(data => {
                setSchool(data);
                setLoading(false);
            });
    }, [])
    return [school, loading]
}

export default useSchool;