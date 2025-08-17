import Container from "../components/container";
import AlbunsFilter from "../contexts/albums/components/albums-filter";

import PhotosList from "../contexts/photos/components/photos-list";

export default function PageHome() {
  return (
    <Container>
      <AlbunsFilter albums={[]} className="mb-9" />
      <PhotosList
        photos={[
          {
            id: "123",
            title: "Hello",
            imageId: "portrait-tower.png",
            albums: [
              { id: "1", title: "Natureza" },
              { id: "2", title: "Viagem" },
              { id: "1", title: "Natureza" },
            ],
          },
          {
            id: "123",
            title: "Hello",
            imageId: "portrait-tower.png",
            albums: [
              { id: "1", title: "Natureza" },
              { id: "2", title: "Viagem" },
              { id: "1", title: "Natureza" },
            ],
          },
        ]}
      />
    </Container>
  );
}
