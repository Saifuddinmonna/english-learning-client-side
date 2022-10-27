import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Course = () => {
        const course = useLoaderData();
        console.log('this is for signle page course details', course);
        return (
                <div>
                        { course.details }
                        <p>{ course.id}</p>
                </div>
        );
};

export default Course;