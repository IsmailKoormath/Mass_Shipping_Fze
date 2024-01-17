import React from 'react'
import { CustomHeading, CustomSubHeading } from '../CustomTexts/CustomTexts'
import quots from '../../assets/quots.svg'
import classes from './TestMonials.module.css'
import ReviewCard from '../ReviewCard/ReviewCard'
const TestMonials = () => {
    const reviews = [
        {
            name: "Jane Smith, Freelance Consultant",
            review: "I was very impressed with FastGo handling of my recent shipment. They went above and beyond to ensure my cargo arrived safely and on time. I will definitely be using their services again in the future."
        },
        {
            name: "Michael Johnson, CEO",
            review: "I was very impressed with FastGo handling of my recent shipment. They went above and beyond to ensure my cargo arrived safely and on time. I will definitely be using their services again in the future."
        },
        {
            name: "Sarah Lee, Online Retailer",
            review: "I was very impressed with FastGo handling of my recent shipment. They went above and beyond to ensure my cargo arrived safely and on time. I will definitely be using their services again in the future."
        }
    ]
    return (
        <div className={classes.TestMonials}>
            <div className={classes.TestMonials_section}>
                <div>
                    <CustomSubHeading>Testimonials</CustomSubHeading>
                    <CustomHeading>Our Clients Speak<br /> for Us</CustomHeading>
                    <div className={classes.client_imgContainer}>
                        <img src={quots} alt="quot-icon" />
                    </div>
                </div>
                <ReviewCard color={"#fff"} background={"#090e23"} name={"John Doe, Business Owner"} para={"I have been using FastGo cargo logistic & transportation services for over a year now and I am extremely satisfied with their service. They are efficient, reliable, and always deliver on time. I highly recommend them to anyone in need of logistics services."} />
            </div>
            <div className={classes.review_list}>
                {reviews.map((rev) => (
                    <ReviewCard para={rev.review} name={rev.name} color={" #121D50"} background={"#fff"} />

                ))}
            </div>
        </div>
    )
}

export default TestMonials