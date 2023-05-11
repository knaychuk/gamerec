import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section>
      <h1><span>{type} Post</span></h1>
      <p>
        {type} and share amazing game recommendations with others!
      </p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Your Game Recommendation</span>
          <textarea 
            value={post.rec}
            onChange={(e) => setPost({...post, rec: e.target.value })}
            placeholder="Write post here"
            required
          />
        </label>
        <label>
          <span>Tag</span>
          <input 
            value={post.tag}
            onChange={(e) => setPost({...post, tag: e.target.value })}
            placeholder="#tag"
            required
          />
        </label>
        <div>
          <Link href="/">
            Cancel
          </Link>
          <button type="submit" disabled={submitting}>
            {submitting ? `${type}...` : type}

          </button>
        </div>
      </form>
    </section>
  )
}
export default Form