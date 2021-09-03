import Form from '../components/Form'

const NewPost = () => {
  const postForm = {
    title: '',
    text: '',
    author: '',
  }

  return <Form formId="add-post-form" postForm={postForm} />
}

export default NewPost
