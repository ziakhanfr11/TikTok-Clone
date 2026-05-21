export default function UserProfile({ user }) {
  return (
    <div>
      <h2>{user?.username || 'User'}</h2>
      <p>Profile Page</p>
    </div>
  )
}
