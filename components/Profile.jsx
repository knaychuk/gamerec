import PostCard from "./PostCard";

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <section>
      <h1>
        <span>{name} Profile</span>
      </h1>
      <p>{desc}</p>

      <div className='mx-5 my-10 md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {data.map((post) => (
          <PostCard
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        ))}
    </div>
    </section>

  )
}
export default Profile