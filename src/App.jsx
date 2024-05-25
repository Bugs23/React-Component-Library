import "./app.scss"
import {badgeColors, bannerTypes} from "./data/data"
import Badge from "./components/Badge/Badge"
import Banner from "./components/Banner/index"

export default function App() {

    return (
        <main className="container px-4">
            <h1 className="mb-8 pt-6 leading-none md:text-4xl lg:text-5xl text-white">Component Library++</h1>
            <section className="mb-8">
                <h2 className="component-section__title text-3xl mb-4 text-white">Badges</h2>
                <h3 className="text-xl text-white mb-2">Square</h3>
                <div className="component-section__main badges flex mb-4 gap-4 flex-wrap">
                    {badgeColors.map((color, index) => (
                        <Badge key={index} color={color} shape="square">{color}</Badge>
                    ))}
                </div>
                <h3 className="text-xl text-white mb-2">Pill</h3>
                <div className="component-section__main badges flex mb-4 gap-4 flex-wrap">
                    {badgeColors.map((color, index) => (
                        <Badge key={index} color={color} shape="pill">{color}</Badge>
                    ))}
                </div>
            </section>
            <section className="mb-8">
                <h2 className="component-section__title text-3xl mb-4 text-white">Banners</h2>
                <div className="component-section__main banners grid grid-cols-1 sm:grid-cols-2 gap-4"> 
                    <div>
                        <h3 className="text-xl text-white mb-2">Multi line</h3>
                        {bannerTypes.map((banner, index) => {
                            const Icon = banner.icon

                            return (
                                <Banner key={index} type={banner.type}>
                                    <Banner.Icon>
                                        <Icon />
                                    </Banner.Icon>
                                    <Banner.Body>
                                        <Banner.Title>{banner.title}</Banner.Title>
                                        <Banner.Text>{banner.text}</Banner.Text>
                                    </Banner.Body>
                                </Banner>
                            )
                        })}
                    </div>       
                    <div>
                        <h3 className="text-xl text-white mb-2">Single line</h3>
                        {bannerTypes.map((banner, index) => {
                            const Icon = banner.icon

                            return (
                                <Banner key={index} type={banner.type}>
                                    <Banner.Icon>
                                        <Icon />
                                    </Banner.Icon>
                                    <Banner.Body>
                                        <Banner.Title>{banner.title}</Banner.Title>
                                    </Banner.Body>
                                </Banner>
                            )
                        })}
                    </div>
                </div>
            </section>
        </main>
    )
}