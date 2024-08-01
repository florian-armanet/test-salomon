import Data from 'data.json'
import CardArticle from './CardArticle/CardArticle'

const App = () => {
    const data = Data

    return (
        <main className="min-h-screen bg-dark py-8">
            <div className="mx-auto w-full max-w-container">
                <h1 className="mb-12 text-center text-4xl text-white">
                    {'Test Salomon - Florian Armanet'}
                </h1>
                <ul className="flex flex-wrap justify-center">
                    {data.map((item) => (
                        <li key={item.id} className="mx-4 my-2">
                            <CardArticle item={item} />
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    )
}

export default App
