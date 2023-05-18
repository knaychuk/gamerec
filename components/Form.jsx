import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section>
      <div className="text-center">
        <h1 className="text-4xl ">{type} Post</h1>
        <p className="text-2xl">{type} your post here!</p>
      </div>
      <form onSubmit={handleSubmit} className="bg-secondary-b flex flex-col justify-center items-center my-5 py-10 px-5 rounded-md">
        <label className="text-xl flex flex-col my-2">
          Your Game Recommendation
          <textarea 
            value={post.rec}
            onChange={(e) => setPost({...post, rec: e.target.value })}
            placeholder="Write post here"
            required
            className="text-box w-72 h-52"
          />
        </label>
        <label className="text-xl flex flex-col ">
          Genre
          <input 
            value={post.tag}
            onChange={(e) => setPost({...post, tag: e.target.value })}
            placeholder="Genre"
            required
            className="text-box w-72"
          />
        </label>
        <div className="my-2">
          <button type="submit" disabled={submitting} className="button-primary">
            {submitting ? `${type}...` : type}
          </button>
          <Link href="/" className="button-secondary px-[1rem] py-[0.63rem] mx-1">
            Cancel
          </Link>
        </div>
      </form>
    </section>
  )
}
export default Form