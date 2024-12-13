type ReplyProps = {
    content: string,
    createdAt: string,
    replyingTo: string,
    user: {
        image: {
            png: string,
            webp: string,
        },
        username: string
    },
}

export default function Reply({content, createdAt, user, replyingTo} : ReplyProps) {
    return (
        <>
            <div className="p-4 rounded-lg">
                <div className='flex gap-4 items-center'>
                    <img className='size-8 rounded-full' src={user.image.png || user.image.webp} alt={`${user.username} profile image`} />
                    <p className="font-bold">{user.username}</p>
                    <p>{createdAt}</p>
                </div>
                <p className="my-4">
                    <span className="text-bold text-indigo-600">@{replyingTo}</span> {content}
                </p>
                <div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </>
    )
}
