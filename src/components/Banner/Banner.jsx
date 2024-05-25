import "./banner.scss"

export default function Banner({children, type}) {
    return (
        <div className={`banner banner-${type}`}>
            {children}
        </div>
    )
}