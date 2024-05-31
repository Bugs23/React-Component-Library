import { RxSlash } from "react-icons/rx"

export default function TestimonialWithoutImageBody({children, author="unknown", company=""}) {
    return (
        <div className="testimonial-without-image__body">
            <q className="testimonial-without-image__body__quote">{children}</q>
            <div className="testimonial-without-image__body__source">
                <p className="testimonial-without-image__body__source__author">{author}</p>
                <span className="testimonial-without-image__body__source__slash" style={{ color: "#2E59F3" }}>
                    <RxSlash size={20} />
                </span>
                <p className="testimonial-without-image__body__source__company">{company}</p>
            </div>
        </div>
    )
}