import React from "react";
import Header from "../components/Header/Header";
import "./Profile.css";
import userPic from "../images/user.png";
import Loading from "../components/Loading";
import UserName from "../components/Header/UserName";
import { getUser } from "../services/userAPI";
import { getFavoriteSongs } from "../services/favoriteSongsAPI";

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      loading: false,
      favorites: 0,
    };
  }

  componentDidMount() {
    this.fetchName();
    this.fetchFavorites();
  }

  async fetchName() {
    this.setState({ loading: true }, async () => {
      const requestReturn = await getUser();
      this.setState({
        name: requestReturn.name,
        loading: false,
      });
    });
  }

  async fetchFavorites() {
    this.setState(
      { loading: true },
      async () => {
        const requestReturn = await getFavoriteSongs();
        this.setState({
          loading: false,
          favorites: requestReturn.length,
        });
      },
    );
  }

  render() {
    const { name, loading, favorites } = this.state;

    return (
      <div data-testid="page-profile" className="main">
        <Header />
        <div className="profile-container">
          <img src={userPic} />
          {loading ? (
            <Loading />
          ) : (
            <div className="user-details">
              <UserName userName={` (${name})`} />
              <p>Músicas favoritas: { favorites }</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Profile;
