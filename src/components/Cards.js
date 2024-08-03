import React, { useState } from "react";
import Card from './Card';
import './Cards.css';

const Cards = ({ courses, category }) => {
    const [likedCourses, setLikedCourses] = useState([]);

    if (!courses) return null;

    const getCourses = () => {
        if (category === "All") {
            let allCourses = [];
            Object.values(courses).forEach((courseCategory) => {
                allCourses = [...allCourses, ...courseCategory];
            });
            return allCourses;
        } else {
            return courses[category] || [];
        }
    };

    return (
        <div className="Card2">
            {getCourses().map((course) => (
                <Card
                    key={course.id}
                    course={course}
                    likedCourses={likedCourses}
                    setLikedCourses={setLikedCourses}
                />
            ))}
        </div>
    );
};

export default Cards;

