import { useEffect, useState } from "react";

const useSchool = () => {
    const [school, setSchool] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://graphics-school-sever-propa-zaman.vercel.app/school')
            .then(res => res.json())
            .then(data => {
                setSchool(data);
                setLoading(false);
            });
    }, [])
    return [school, loading]
}

export default useSchool;