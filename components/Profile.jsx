import PostCard from "./PostCard";

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <section>
      <div className="text-center mx-5 md:text-left">
        <h1 className="text-4xl">{name} Profile</h1>
        <h2 className="text-2xl">{desc}</h2>
      </div>
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