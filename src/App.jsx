// Styles
import "./styles/app.scss"
import "./styles/global.scss"

// Data
import {colors, bannerTypes} from "./data/data"

// Components
import Badge from "./components/Badge/Badge"
import Banner from "./components/Banner/index"
import Card from "./components/Card/index"
import TestimonialWithImage from "./components/Testimonials/TestimonialWithImage/index"
import TestimonialWithoutImage from "./components/Testimonials/TestimonialWithoutImage/index"
import Tooltip from "./components/Tooltip/Tooltip"

// Testimonial image
import testimonialImage from "/images/testimonial-image.jpg"
import testimonialWithoutImageLogo from "/images/logo.png"

// Card icon
import { IoCloudUploadOutline } from "react-icons/io5"



export default function App() {

    return (
        <main className="main container px-4">
            <h1 className="mb-8 pt-6 text-3xl leading-none md:text-4xl lg:text-5xl text-white">Component Library++</h1>
            {/* Badges */}
            <section className="mb-8">
                <h2 className="component-section__title text-3xl mb-4 text-white">Badges</h2>
                <h3 className="text-xl text-white mb-2">Square</h3>
                <div className="component-section__main badges flex mb-4 gap-4 flex-wrap">
                    {colors.map((color, index) => (
                        <Badge key={index} color={color} shape="square">{color}</Badge>
                    ))}
                </div>
                <h3 className="text-xl text-white mb-2">Pill</h3>
                <div className="component-section__main badges flex mb-4 gap-4">
                    {colors.map((color, index) => (
                        <Badge key={index} color={color} shape="pill">{color}</Badge>
                    ))}
                </div>
            </section>
            {/* Banners */}
            <section className="mb-8">
                <h2 className="component-section__title text-3xl mb-4 text-white">Banners</h2>
                <div className="component-section__main banners grid grid-cols-1 sm:grid-cols-2 gap-4"> 
                    <div className="flex flex-col gap-4">
                        {bannerTypes.map((banner, index) => {
                            const Icon = banner.icon

                            return (
                                <Banner key={`banner-${index}`} type={banner.type}>
                                    <Banner.Icon>
                                        <Icon />
                                    </Banner.Icon>
                                    <Banner.Text title={banner.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner.Text>
                                </Banner>
                            )
                        })}
                    </div>
                    <div className="flex flex-col gap-4">
                        {bannerTypes.map((banner, index) => {
                            const Icon = banner.icon

                            return (
                                <Banner key={`banner-${index}`} type={banner.type}>
                                    <Banner.Icon>
                                        <Icon />
                                    </Banner.Icon>
                                    <Banner.Text title={banner.title}></Banner.Text>
                                </Banner>
                            )
                        })}
                    </div>
                </div>
            </section>
            {/* Cards */}
            <section className="mb-8">
                <h2 className="component-section__title text-3xl mb-12 text-white">Cards</h2>
                <div className="component-section__main cards">
                    <Card>
                        <Card.Icon>
                            <IoCloudUploadOutline />
                        </Card.Icon>
                        <Card.Title>Easy Deployment</Card.Title>
                        <Card.Text>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card.Text>
                    </Card>
                </div>
            </section>
            {/* Testimonials */}
            <section className="mb-8">
                <h2 className="component-section__title text-3xl mb-4 text-white">Testimonials</h2>
                <h3 className="text-xl text-white mb-6">With Image</h3>
                <div className="component-section__main testimonials mb-16">
                    <TestimonialWithImage src={testimonialImage}>
                        <TestimonialWithImage.Body author="May Andersons" company="Workcation, CTO">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.
                        </TestimonialWithImage.Body>
                    </TestimonialWithImage>
                </div>
                <div className="component-section__main testimonial">
                    <h3 className="text-xl text-white mb-2">Without Image</h3>
                    <TestimonialWithoutImage>
                        <TestimonialWithoutImage.Logo>
                            <img src={testimonialWithoutImageLogo} alt="Company Logo" />
                        </TestimonialWithoutImage.Logo>
                        <TestimonialWithoutImage.Body author="May Andersons" company="Workcation, CTO">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.
                        </TestimonialWithoutImage.Body>
                    </TestimonialWithoutImage>
                </div>
            </section>
            {/* Tooltips */}
            <section className="mb-8">
                <h2 className="component-section__title text-3xl mb-12 text-white">Tooltips</h2>
                <div className="component-section__main flex gap-4 flex-wrap justify-evenly">
                    <Tooltip content="This is a tooltip" color="red" position="top">
                        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">Hover over me</button>
                    </Tooltip>
                    <Tooltip content="Another tooltip" color="yellow" position="right">
                        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">Hover over me</button>
                    </Tooltip>
                    <Tooltip content="Yet another tooltip" color="green" position="bottom">
                        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">Hover over me</button>
                    </Tooltip>
                    <Tooltip content="And another tooltip" color="blue" position="left">
                        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">Hover over me</button>
                    </Tooltip>
                </div>
            </section>
        </main>
    )
}














