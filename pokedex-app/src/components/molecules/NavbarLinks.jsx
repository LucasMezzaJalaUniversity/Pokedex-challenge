import { Text } from '../atoms/Text'
import { useLocation } from 'react-router';
import { NavLink } from 'react-router';

export const NavbarLinks = () => {
  const location = useLocation();

  console.log(location.pathname);
  return (
    <nav style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em'}}>
      {location === '/game' || location === '/langs' ?
        <>
          <NavLink
            to="/game"
            style={{textDecoration: 'none', color: 'inherit'}}
            className={({ isActive }) =>
              isActive ? "navlink" : ""
            }
          >
            <Text>Game</Text>
          </NavLink>
          <NavLink
            to="/langs"
            style={{textDecoration: 'none', color: 'inherit'}}
            className={({ isActive }) =>
              isActive ? "navlink" : ""
            }
          > 
            <Text>Langs</Text>
          </NavLink>
          <NavLink
            to="/"
            style={{textDecoration: 'none', color: 'inherit'}}
            className={({ isActive }) =>
              isActive ? "navlink" : ""
            }
          >
            <Text classname="navlink">Pokedex</Text>
          </NavLink>
        </>
      : <>
        <NavLink
          to="/"
          style={{textDecoration: 'none', color: 'inherit'}}
          className={({ isActive }) =>
            isActive ? "navlink" : ""
          }
        >
          <Text>Home</Text>
        </NavLink>
        <NavLink
          to="/types"
          style={{textDecoration: 'none', color: 'inherit'}}
          className={({ isActive }) =>
            isActive ? "navlink" : ""
          }
        >
          <Text>Types</Text>
        </NavLink>
        <NavLink
          to="/generations"
          style={{textDecoration: 'none', color: 'inherit'}}
          className={({ isActive }) =>
            isActive ? "navlink" : ""
          }
        >
          <Text>Generations</Text>
        </NavLink>
      </>}
    </nav>
  )
}