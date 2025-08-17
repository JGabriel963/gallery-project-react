import { useParams } from "react-router";
import Text from "../components/text";
import Container from "../components/container";
import type { Photo } from "../contexts/photos/models/photo";
import Skeleton from "../components/skeleton";
import PhotosNavigator from "../contexts/photos/components/photos-navigatior";
import ImagePreview from "../components/image-preview";
import Button from "../components/button";
import AlbumsListSelectable from "../contexts/albums/components/albums-list-selectable";
import useAlbums from "../contexts/albums/hooks/use-albums";

type Params = {
  id: string;
};

export default function PagePhotoDetails() {
  const { id } = useParams<Params>();
  const { albums, isLoadingAlbums } = useAlbums();
  const isLoading = false;
  const photo = {
    id: "123",
    title: "Hello",
    imageId: "portrait-tower.png",
    albums: [
      { id: "1", title: "Natureza" },
      { id: "2", title: "Viagem" },
      { id: "1", title: "Natureza" },
    ],
  } as Photo;

  return (
    <Container>
      <header className="flex items-center justify-between gap-8 mb-8">
        {!isLoading ? (
          <Text as="h2" variant="heading-large">
            {" "}
            {photo.title}{" "}
          </Text>
        ) : (
          <Skeleton className="w-48 h-8" />
        )}

        <PhotosNavigator loading={isLoading} />
      </header>

      <div className="grid grid-cols-[21rem_1fr] gap-24">
        <div className="space-y-3">
          {!isLoading ? (
            <ImagePreview
              src={`/images/${photo?.imageId}`}
              title={photo?.title}
              imageClassName="h-[21rem]"
            />
          ) : (
            <Skeleton className="h-[21rem]" />
          )}

          {!isLoading ? (
            <Button variant="destructive">Excluir</Button>
          ) : (
            <Skeleton className="w-20 h-10" />
          )}
        </div>

        <div className="py-3">
          <Text as="h3" variant="heading-medium" className="mb-6">
            Álbuns
          </Text>

          <AlbumsListSelectable
            loading={isLoadingAlbums}
            photo={photo}
            albums={albums}
          />
        </div>
      </div>
    </Container>
  );
}
