import { useNavigate } from "react-router-dom";
import "./not-found.css";
const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className="not_found_wrap">
      <div className="not_found_error">
        <h1 className="not_found_code">Sahifa topilmadi (#404)</h1>
        <h2 className="not_found_title"></h2>
        <h2 onClick={() => navigate("/")} className="not_found_desc cursor-pointer">Bosh sahifaga qaytish</h2>
      </div>
      <footer className="not_found_footer">
        <p>Bugun yangi bilimlarni kashf qiling!</p>
      </footer>
    </div>
  );
};

export default NotFoundPage;
