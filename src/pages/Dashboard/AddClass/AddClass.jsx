import React, { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import useTitle from '../../../hooks/useTitle';

const AddClass = () => {
    useTitle('Add Class')

    const { user } = useContext(AuthContext);

    const handleAddClass = event => {
        event.preventDefault();

        const form = event.target;
        const instructor = user?.displayName;
        const instructor_mail= user?.email;
        const instructor_image = user?.photoURL;
        const class_name = form.class_name.value;
        const class_image = form.class_image.value;
        const price = form.price.value;
        const available_seats = form.available_seats.value;
      
        const addedClasses = {
            instructor,
            instructor_mail,
            instructor_image,
            class_name,
            class_image,
            price,
            available_seats,
        }

        console.log(addedClasses);

        fetch('https://graphics-school-sever-propa-zaman.vercel.app/school', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addedClasses)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert('Class is added successfully')
                }
            })

    }
    return (
        <div className='max-w-lg mx-auto'>
            <h2 className='text-center text-4xl font-bold text-violet-800 mt-10'>Add Class </h2>
            <form onSubmit={handleAddClass}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Instructor</span>
                        </label>
                        <input type="text" name="instructor" defaultValue={user?.displayName} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Instructor email</span>
                        </label>
                        <input type="text" name="instructor_mail" defaultValue={user?.email} placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Instructor image</span>
                        </label>
                        <input type="text" name="instructor_image" defaultValue={user?.photoURL} placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Class name</span>
                        </label>
                        <input type="text" name="class_name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Class Image</span>
                        </label>
                        <input type="text" name="class_image" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name="price" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Seats</span>
                        </label>
                        <input type="number" name="available_seats" className="input input-bordered" />
                    </div>
                   
                 
                 
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary btn-outline" type="submit" value="Add Class" />
                </div>
            </form>
            <div className="card-body">

            </div>
        </div>
    );
};

export default AddClass;