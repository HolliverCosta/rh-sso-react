import { useKeycloak } from "keycloak-react-web";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { keycloak, initialized } = useKeycloak();
  const navigate = useNavigate();
  console.log(keycloak)
  if(!initialized){
    return (<div>Carregando...</div>)
  }
  function logout(){

    keycloak?.logout({ redirectUri: 'http://localhost:3000/' })
  }

  const validarToken = () => {
    const tokenExpiry = keycloak.isTokenExpired()

    if (tokenExpiry) {
      navigate('/')
      console.log('Token expirado');
    } else {
      console.log('Token válido');
    }
  };

  return (
    <div>
      <div>Bem vindo, {keycloak.tokenParsed.preferred_username}!</div>
      <button onClick={logout}>Logout</button>
      <button onClick={validarToken}>Validar o token</button>

    </div>
  );
};