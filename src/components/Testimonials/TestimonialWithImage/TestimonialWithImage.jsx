import "./TestimonialWithImage.scss"

// Default testimonial image if none are passed
import defaultTestimonialImage from "/images/testimonial-image-default.jpg"

export default function TestimonialWithImage({children, src = defaultTestimonialImage, alt = "Testimonial Headshot"}) {
    return (
        <div className="testimonial-with-image">
            <div className="testimonial-with-image__image">
                <img src={src} alt={alt} />
            </div>
            {children}
        </div>
    )
}