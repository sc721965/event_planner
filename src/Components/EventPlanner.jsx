import React from 'react';
import './EventPlanner.css'; // Import CSS file for styling

const EventPlanner = () => {
    return (
        <div className="event-planner-container">
            {/* Page Header */}
            <header>
                <h1>Welcome to Event Planner</h1>
            </header>
            {/* Section for describing the purpose or overview of the app */}
            <section className="description">
                {/* Description content goes here */}
                <p>This app helps you plan and organize events seamlessly.
                    From birthdays to corporate events, we've got you covered!
                </p>
                {/* Call-to-action button */}
                <button className="get-started-button">Get Started</button>
                <p className="additional-info">Sign up now to unlock exclusive features!</p>
            </section>
            {/* Section to list or categorize different types of events */}
            <section className="events_categories">
                {/* Event categories content goes here */}
            </section>
            {/* Section to highlight app features or functionalities */}
            <section className="features">
                {/* Features content goes here */}
            </section>
            {/* Section to showcase user reviews or testimonials */}
            <section className="testimonials">
                {/* Testimonials content goes here */}
            </section>
            {/* Section to provide contact information or a contact form */}
            <section className="contact">
                {/* Contact content goes here */}
            </section>
        </div>
    );
};

export default EventPlanner;
