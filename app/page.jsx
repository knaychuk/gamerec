import Feed from '@components/Feed';

const Home = () => {
  return (
    <section>
      <h1 className="header-text text-center">Discover & Share
        <br className=""/>
        <span>Game Recommondations or Other Info</span>
      </h1>
      <p className="text-center">GameRec is an open-source forum to share all things game related!</p>

      <Feed />
    </section>
  )
}
export default Home