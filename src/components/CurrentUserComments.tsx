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
                replies={comment.replies}
            />
        ))}

        <form action="">
            <textarea className="border border-indigo-500 rounded-xl w-full" name="" id=""></textarea>
        </form>

        <div className="p-4">
            <div className="flex justify-between items-center">
                <img className="rounded-full size-8" src={image} alt={`${username} profile image`} />

                <button className="uppercase py-3 px-7 bg-indigo-600 text-white font-bold rounded-lg">
                    Send
                </button>
            </div>
        </div>
    </div>
  )
}
