import React from 'react';
import './EventPlanner.css'; // Import CSS file for styling
import Footer from './Footer';

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
                <p className="additional-info">Sign up now to unlock exclusive features!1</p>
            </section>
            {/* Section to list or categorize different types of events */}
            <section className="events_categories">
                {/* Social event types */}
                <ul>
                    <h2>Social1 Events:</h2>
                    <li>Birthday parties</li>
                    <li>Anniversary celebrations</li>
                    <li>Wedding receptions</li>
                    <li>Baby showerss</li>
                    <li>Graduation parties</li>
                    <li>Family reunions</li>
                </ul>
                {/* Entertainment-based event types */}
                <ul>
                    <h2>Entertainment Events:</h2>
                    <li>Concerts</li>
                    <li>Music festivals</li>
                    <li>Film screenings</li>
                    <li>Comedy shows</li>
                    <li>Art exhibitions</li>
                    <li>Cultural events</li>
                </ul>
                {/* Community-focused event types */}
                <ul>
                    <h2>Community Events:</h2>
                    <li>Fundraising events</li>
                    <li>Charity galas</li>
                    <li>Volunteer drives</li>
                    <li>Neighborhood block parties</li>
                    <li>Community festivals</li>
                    <li>Cultural celebrations</li>
                </ul>
            </section>
            {/* Section to highlight app features or functionalities */}
            <section className="features">
                {/* Features content goes here */}
                <section className="features">
                    {/* Section heading */}
                    <h2>Features</h2>
                    {/* List of key platform features */}
                    <ul>
                        <li>Easy event creation and management</li>
                        <li>Customizable event templates</li>
                        <li>Guest list management</li>
                        <li>Real-time collaboration</li>
                        <li>Reminders and notifications</li>
                    </ul>
                </section>
            </section>
            {/* Section to showcase user reviews or testimonials */}
            <section className="testimonials">
                {/* Testimonials content goes here */}
                <section className="testimonials">
                    {/* Section heading */}
                    <h2>Testimonials</h2>
                    {/* Individual testimonial block */}
                    <div className="testimonial">
                        <p>"Event Planner made organizing my wedding a breeze. Highly recommended!"</p>
                        <p className="author">- Emily Johnson</p>
                    </div>
                    {/* Another testimonial block */}
                    <div className="testimonial">
                        <p>"I use Event Planner for all my corporate events. It saves me so much time and effort!"</p>
                        <p className="author">- John Smith</p>
                    </div>
                </section>
            </section>
            {/* Section to provide contact information or a contact form */}
            <section className="contact">
                {/* Contact content goes here */}
                <section className="contact">
                    {/* Section heading */}
                    <h2>Contact Us</h2>
                    {/* Contact form */}
                    <form>
                        {/* Name input field */}
                        <input type="text" placeholder="Name" />
                        {/* Email input field */}
                        <input type="email" placeholder="Email" />
                        {/* Message textarea */}
                        <textarea placeholder="Message"></textarea>
                        {/* Submit button */}
                        <button className="submit-button">Send</button>
                    </form>
                </section>
            </section>
         <Footer/>            
        </div>
        
    );
};

export default EventPlanner;
