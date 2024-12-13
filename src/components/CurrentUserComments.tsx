import Comment from "./Comment"
import data from '../../data.json'

type CurrentUserCommentsProps = {
    image: string,
    username: string
}

export default function CurrentUserComments({image, username} : CurrentUserCommentsProps) {

    const { comments } = data
    console.log(comments)
  return (
    <div>
        
        {comments.map(comment => (
            <Comment 
                content={comment.content}
                createdAt={comment.createdAt}
                user={comment.user}
            />
        ))}

        <div>
            <div className="flex justify-between items-center">
                <img className="rounded-full size-8" src={image} alt={`${username} profile image`} />

                <button>
                    Send
                </button>
            </div>
        </div>
    </div>
  )
}
