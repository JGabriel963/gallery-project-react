import Button from "../../../components/button";
import Skeleton from "../../../components/skeleton";
import Text from "../../../components/text";
import type { Album } from "../models/album";
import cx from "classnames";

interface AlbunsFilterProps extends React.ComponentProps<"div"> {
  albums: Album[];
  loading?: boolean;
}

export default function AlbunsFilter({
  albums,
  loading,
  className,
  ...props
}: AlbunsFilterProps) {
  return (
    <div
      className={cx("flex items-center gap-3.5 overflow-x-auto", className)}
      {...props}
    >
      <Text variant="heading-small">Álbuns</Text>
      <div className="flex gap-3">
        {!loading ? (
          <>
            <Button size="sm" variant="primary" className="cursor-pointer">
              Todos
            </Button>
            {albums.map((album) => (
              <Button
                key={album.id}
                size="sm"
                variant="ghost"
                className="cursor-pointer"
              >
                {album.title}
              </Button>
            ))}
          </>
        ) : (
          Array.from({ length: 5 }).map((_, index) => (
            <Skeleton
              key={`album-button-loading-${index}`}
              className="w-28 h-7"
            />
          ))
        )}
      </div>
    </div>
  );
}
