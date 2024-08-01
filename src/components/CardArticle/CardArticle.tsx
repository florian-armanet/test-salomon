import ReadingTime from 'components/ReadingTime/ReadingTime'
import { CardArticle as TypeCardArticle } from 'definitions'
import Text from 'components/Text/Text'
import Title from 'components/Title/Title'
import Tag from 'components/Tag/Tag'

const CardArticle = ({ item }: { item: TypeCardArticle }) => {
    return (
        <div className="flex min-h-96 w-full max-w-xs flex-col bg-white sm:min-h-420px sm:max-w-354px">
            <img src={item.image} alt={item.title} width={354} height={210} />

            <div className="flex flex-1 flex-col bg-white p-6">
                <Title title={item.title} className="mb-2" size={'base'}>
                    {item.title}
                </Title>

                <Text title={item.text} size={'xl'}>
                    {item.text}
                </Text>

                <div className="flex flex-1 flex-wrap content-end justify-between">
                    <ReadingTime readingTime={item.readingTime} />

                    {item.tags?.length && (
                        <ul className="ml-8 flex flex-1 flex-wrap justify-end">
                            {item.tags.map((tag) => (
                                <li className="m-0.5" key={tag}>
                                    <Tag size={'sm'}>{tag}</Tag>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CardArticle
