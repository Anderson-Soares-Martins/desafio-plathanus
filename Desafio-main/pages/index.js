import Link from 'next/link'
import dbConnect from '../lib/dbConnect'
import Post from '../models/Post'

const Index = ({ posts }) => (
  <>
    {/* Create a card for each pet */}
    {posts.map((post) => (
      <div key={post._id}>
        <div className="card">
          <h5 className="pet-name">{post.title}</h5>
          <div className="main-content">
            <p className="pet-name">{post.title}</p>
            <p className="owner">Text: {post.text}</p>

            {/* Extra post Info: Likes and Dislikes */}

            <div className="btn-container">
              <Link href="/[id]/edit" as={`/${post._id}/edit`}>
                <button className="btn edit">Edit</button>
              </Link>
              <Link href="/[id]" as={`/${post._id}`}>
                <button className="btn view">View</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    ))}
  </>
)

/* Retrieves pet(s) data from mongodb database */
export async function getServerSideProps() {
  await dbConnect()

  /* find all the data in our database */
  const result = await Post.find({})
  const posts = result.map((doc) => {
    const pet = doc.toObject()
    pet._id = pet._id.toString()
    return pet
  })

  return { props: { posts: posts } }
}

export default Index
