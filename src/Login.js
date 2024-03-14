import { useKeycloak } from "keycloak-react-web";

export default function Login() {
  const { keycloak } = useKeycloak();
  return (
    <button onClick={() => keycloak.login()}>Login</button>
  );
};