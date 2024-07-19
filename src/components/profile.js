import "./profile.css";

function Profile() {
  return (
    <div class="profile">
      <div className="arrow-profile">
        <i className="fa-solid fa-chevron-right arrow"></i>{" "}
      </div>
      <div className="profile-box">
        <div class="profile-section">
          <i class="fa-brands fa-github"></i>
          <a
            href="https://github.com/deriana"
            target="blank"
            className="profile-link"
          >
            <p>Github</p>
          </a>
        </div>
        <div class="profile-section">
          <i class="fa-brands fa-facebook"></i>
          <a
            href="https://www.facebook.com/jerri.maruf"
            target="blank"
            className="profile-link"
          >
            <p>Facebook</p>
          </a>
        </div>
        <div class="profile-section">
          <i class="fa-brands fa-instagram"></i>
          <a
            href="https://www.instagram.com/hi_deri_/"
            target="blank"
            className="profile-link"
          >
            <p>Instagram</p>
          </a>
        </div>
        <div class="profile-section">
          <i class="fa-brands fa-x-twitter"></i>
          <a
            href="https://x.com/Deriana765"
            target="blank"
            className="profile-link"
          >
            <p>Twitter</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Profile;
