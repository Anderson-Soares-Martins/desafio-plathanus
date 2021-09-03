import Link from 'next/link'
import dbConnect from '../lib/dbConnect'
import Post from '../models/Post'
import Button from '@material-ui/core/Button'
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';

const Index = ({ posts }) => (
  <>
    {/* Create a card for each pet */}
    {posts.map((post) => (
      <div key={post._id}>
        <div className="card">
          <div className="main-content">
            <p className="pet-name">{post.title}</p>
            <p className="owner">Text: {post.text}</p>

            {/* Extra post Info: Likes and Dislikes */}

            <div className="btn-container">
              <Link href="/[id]/edit" as={`/${post._id}/edit`}>
                <Button
                  variant="contained"
                  color="primary"
                  endIcon={<EditIcon>Edit</EditIcon>}
                >
                  Edit
                </Button>
              </Link>
              <Link href="/[id]" as={`/${post._id}`}>
                <Button
                  variant="contained"
                  color="primary"
                  endIcon={<VisibilityIcon>View</VisibilityIcon>}
                >
                  View
                </Button>
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
    const post = doc.toObject()
    post._id = post._id.toString()
    return post
  })

  return { props: { posts: posts } }
}

export default Index
