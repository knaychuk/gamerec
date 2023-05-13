import PostCard from "./PostCard";

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <section>
      <h1>
        <span>{name} Profile</span>
      </h1>
      <p>{desc}</p>

      <div>
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