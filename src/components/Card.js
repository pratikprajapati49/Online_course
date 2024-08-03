import React from "react";
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Card.css';

const Card = ({ course, likedCourses, setLikedCourses }) => {

    const clickHandler = () => {
        if (likedCourses.includes(course.id)) {
            setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
            toast.warning("Like Removed");
        } else {
            setLikedCourses((prev) => [...prev, course.id]);
            toast.success("Like Added");
        }
    };

    return (
        <div className="Card1">
            <div className="relative">
                <img height="240px" width="300px" src={course.image.url} alt="Course" />
                <button onClick={clickHandler} className="lbutton">
                    {likedCourses.includes(course.id) ? <FcLike fontSize="1.75rem" /> : <FcLikePlaceholder fontSize="1.75rem" />}
                </button>
            </div>

            <div className="content">
                <p className="title">{course.title}</p>
                <p className="desc">
                    {course.description.length > 100 ? `${course.description.substring(0, 100)}...` : course.description}
                </p>
            </div>
        </div>
    );
};

export default Card;
