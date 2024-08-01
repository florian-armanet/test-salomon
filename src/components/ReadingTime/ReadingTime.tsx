import pictoTime from 'assets/time.svg'

const ReadingTime = ({ readingTime }: { readingTime: string }) => {
    return (
        <div className="flex flex-wrap items-center">
            <img src={pictoTime} alt="Reading time" />
            <span className="ml-2">{readingTime}</span>
        </div>
    )
}

export default ReadingTime
