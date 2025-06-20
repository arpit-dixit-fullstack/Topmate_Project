import { useAuth } from '../components/AuthProvider'
export function DashboardPage() {
  let { user } = useAuth();
  console.log(user);
  return (
    <>
      <center>
        <h1>DashboardPage</h1>
        <h1>Hi...{ user}</h1>
      </center>
    </>
  )
}