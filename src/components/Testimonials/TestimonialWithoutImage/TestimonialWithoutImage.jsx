import "./TestimonialWithoutImage.scss"

export default function TestimonialWithoutImage({children}) {
    return (
        <div className="testimonial-without-image">
            {children}
            <div className="testimonial-without-image__dot-background"></div>
        </div>
    )
}