import { useNavigate, useParams } from "react-router-dom";

const Parameter = () => {
  const params = useParams();
  const navigate = useNavigate();
  console.log("PARAMS", params);
  return (
    <div
      onClick={() => {
        navigate("/");
      }}
    >
      Parameter caricato
      <p>
        lat: {params.lat}, lon: {params.lon}
      </p>
    </div>
  );
};

export default Parameter;
