
const Profile = ({ name, tag, location, avatarUrl, followersCount, viewsCount, likesCount }) => {
 
  return(<div class="profile">
  <div class="description">
    <img
      src={avatarUrl}
      alt="Аватар пользователя"
      class="avatar"
    />
    <p class="name">{name}</p>
    <p class="tag">@{tag}</p>
    <p class="location">{location}</p>
  </div>

  <ul class="stats">
    <li>
      <span class="label">Followers</span>
      <span class="quantity">{followersCount}</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">{viewsCount}</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">{likesCount}</span>
    </li>
  </ul>
</div>)
};

export default Profile;