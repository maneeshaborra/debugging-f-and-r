import BlogList from '../BlogList'
import UserInfo from '../UserInfo'
import './index.css'

const Home = () => (
  <div className="home-container">
    <UserInfo />
    <BlogList />
    <h1>title</h1>
  </div>
)

export default Home
