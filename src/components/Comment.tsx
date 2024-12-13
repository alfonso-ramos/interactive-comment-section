type CommentProps = {
    content: string,
    createdAt: string,
    user: {
        image: {
            png: string,
            webp: string,
        },
        username: string
    }
}

export default function Comment({content, createdAt, user} : CommentProps) {
    return (
        <div>
            <div className='flex gap-4 items-center'>
                <img className='size-8 rounded-full' src={user.image.png || user.image.webp} alt={`${user.username} profile image`} />
                <p>{user.username}</p>
                <p>{createdAt}</p>
            </div>
            <p>
                {content}
            </p>
            <div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}
