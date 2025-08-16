import { useParams } from "react-router";
import Text from "../components/text";

type Params = {
  id: string;
};

export default function PagePhotoDetails() {
  const { id } = useParams<Params>();

  return (
    <div>
      <Text>Página de detalhes da foto</Text>
      <hr />
      <Text>ID: {id}</Text>
    </div>
  );
}
