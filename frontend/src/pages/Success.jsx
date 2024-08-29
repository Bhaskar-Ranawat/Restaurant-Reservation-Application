import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

const Success = () => {
  const [countdown, setCountdown] = useState(10);
  const navigate = useNavigate();

  useEffect(()=>{
    const timeoutId = setInterval(()=>{
      setCountdown(preCount => {
        if(preCount === 1){
          clearInterval(timeoutId);
          navigate('/');
        }
        return preCount - 1;
      })
    }, 1000);
    return () => clearInterval(timeoutId);
  }, [navigate]);

  return (
    <>
      <section>
        <div className="notFound">
          <div className="container">
            <img src="/sandwich.png" alt="success" />
            <h1>Redirecting to home in {countdown} seconds....</h1>
            <Link to={'/'}>Back to Homepage 
                <HiOutlineArrowNarrowRight/>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Success