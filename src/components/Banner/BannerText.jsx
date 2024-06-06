
export default function BannerText({children, title}) {
    return (
        <div className="banner__text">
            <h5 className="banner__text__title">{title}</h5>

            {/* If there are children, render the paragraph element */}
            {children && <p className="banner__text__para">{children}</p>}
        </div>
    )
}