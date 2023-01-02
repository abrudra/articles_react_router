import { NavLink, useParams, useNavigate } from "react-router-dom";

function Arcticle() {
  let param = useParams();
  let navigate = useNavigate();
  console.log(param);
  return (
    <>
      <div className="arcticle-class">
        <NavLink onClick={() => navigate(-1)}>
          <h4>👈Go back to article</h4>
        </NavLink>
        <div className="slug-class">
          The slug of the article is:<b>::{param.slug}!</b>
        </div>
      </div>
    </>
  );
}

export default Arcticle;
