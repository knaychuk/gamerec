import Feed from '@components/Feed';
import Link from 'next/link';

const Home = () => {
  return (
    <section>
      <div className='text-center'>
        <h1 className='text-4xl text-accent'>Discover & Share</h1>
        <h2 className='text-3xl text-accent'>Awesome Game Recommendations</h2>
      </div>


      <Feed />
    </section>
  )
}
export default Home