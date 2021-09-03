import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import dbConnect from '../../lib/dbConnect'
import Post from '../../models/Post'

/* Allows you to view pet card info and delete pet card*/
const PostPage = ({ post }) => {
  const router = useRouter()
  const [message, setMessage] = useState('')
  const handleDelete = async () => {
    const postID = router.query.id

    try {
      await fetch(`/api/posts/${postID}`, {
        method: 'Delete',
      })
      router.push('/')
    } catch (error) {
      setMessage('Failed to delete the pet.')
    }
  }

  return (
    <div key={post._id}>
      <div className="card">
        <div className="main-content">
          <p className="pet-name">{post.title}</p>
          <p className="owner">text: {post.text}</p>

          {/* Extra Pet Info: Likes and Dislikes */}

          <div className="btn-container">
            <Link href="/[id]/edit" as={`/${post._id}/edit`}>
              <button className="btn edit">Edit</button>
            </Link>
            <button className="btn delete" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
      {message && <p>{message}</p>}
    </div>
  )
}

export async function getServerSideProps({ params }) {
  await dbConnect()

  const post = await Post.findById(params.id).lean()
  post._id = post._id.toString()

  return { props: { post } }
}

export default PostPage
