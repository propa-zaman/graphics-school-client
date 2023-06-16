
const MyClassesRow = ({ myClass, handleDelete }) => {
    const { _id, class_name, class_image, price, available_seats } = myClass;

    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="avatar">
                    <div className="rounded w-24 h-24">
                        {class_image && <img src={class_image} alt="Avatar Tailwind CSS Component" />}
                    </div>
                </div>
            </td>
            <td>
                {class_name}
            </td>
            <td>{available_seats}</td>
            <td>${price}</td>
          
        </tr>
    );
};

export default MyClassesRow;