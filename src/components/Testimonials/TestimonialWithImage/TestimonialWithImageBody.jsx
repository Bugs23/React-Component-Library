import { RiDoubleQuotesL } from "react-icons/ri"

export default function TestimonialWithImageText({children, author="unknown", company=""}) {
    return (
        <div className="testimonial-with-image__body">
            <RiDoubleQuotesL className="testimonial-with-image__body__icon" />
            <q className="testimonial-with-image__body__quote">{children}</q>
            <div className="testimonial-with-image__body__source">
                <p className="testimonial-with-image__body__source__author">{author}</p>
                <p className="testimonial-with-image__body__source__company">{company}</p>
            </div>
        </div>
    )
}