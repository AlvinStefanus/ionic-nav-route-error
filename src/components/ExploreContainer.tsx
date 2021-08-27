import { Link, useLocation } from 'react-router-dom';
import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {

  const location = useLocation();

  return (
    <div className="container">
      {location.pathname !== '/test/test' ?
        <Link to="/test/test">Go To Tab2</Link> :
        <p>Press back to tab 1 will cause error</p>
      }
    </div >
  );
};

export default ExploreContainer;
