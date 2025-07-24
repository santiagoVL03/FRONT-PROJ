import Post from '../Post'

function MangaCustomPost({
    manganame,
    author,
    description,
    image_id
}: {
    manganame: string,
    author: string,
    description: string,
    image_id: string
}) {
    return (
        <div>
            <Post
                username={author}
                imageIdS={image_id}
                description={description}
                from="manga-custom-post"
                manganame={manganame}
            />
        </div>

    )
}

export default MangaCustomPost