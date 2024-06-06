import "./banner.scss"
import typeToColor from "../../utility/typeToColor"

export default function Banner({children, type="neutral"}) {

    const color = typeToColor(type)

    return (
        <div className={`banner ${color}`}>
            {children}
        </div>
    )
}