import Descripcion from '../components/Descripcion';

const Home = () => {
    return(
        <div>
            <h1>Home</h1>
            <Descripcion> Este es un ejemplo de uso de react router en su versión 6. En el siguiente ejemplo vemos el uso de rutas a diferentes secciones del sitio web.</Descripcion>

            <Descripcion>
            Veremos el uso de rutas anidadas. Layout y Outlet. Hooks de 'useParams', 'useNavigate', 'useSearchParams', 'useLocation'. Y como resaltar un enlace activo con NavLink</Descripcion>
        </div>
    );
}
export default Home;