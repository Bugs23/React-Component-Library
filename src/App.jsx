import "./app.scss"
import Badge from "./components/Badge/Badge"

export default function App() {
    return (
        <main className="container px-4">
            <h1 className="mb-8 pt-6 text-3xl font-extrabold leading-none md:text-4xl lg:text-5xl text-white">Component Library++</h1>
            <section className="component-section mb-8">
                <h2 className="component-section__title text-3xl mb-4 text-white">Badges</h2>
                <h3 className="component-section__sub-title text-xl text-white mb-2">Square</h3>
                <div className="component-section__main badges flex mb-4 gap-4 flex-wrap">
                    <Badge color="red" shape="square" />
                    <Badge color="red" shape="square" />
                    <Badge color="yellow" shape="square" />
                    <Badge color="green" shape="square" />
                    <Badge color="blue" shape="square" />
                    <Badge color="indigo" shape="square" />
                    <Badge color="purple" shape="square" />
                    <Badge color="pink" shape="square" />
                </div>
                <h3 className="component-section__sub-title text-xl text-white mb-2">Pill</h3>
                <div className="component-section__main badges flex mb-4 gap-4 flex-wrap">
                    <Badge color="red" shape="pill" />
                    <Badge color="red" shape="pill" />
                    <Badge color="yellow" shape="pill" />
                    <Badge color="green" shape="pill" />
                    <Badge color="blue" shape="pill" />
                    <Badge color="indigo" shape="pill" />
                    <Badge color="purple" shape="pill" />
                    <Badge color="pink" shape="pill" />
                </div>
            </section>
        </main>
    )
}