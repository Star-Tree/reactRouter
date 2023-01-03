import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <>
      <h2>你的網址出錯囉~ 請回到首頁</h2>
      <Link to="/">回到首頁</Link>
    </>
  );
}

export default NotFound;