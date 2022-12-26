export interface Track{
    album: {
      album_type: string,
      images: {
        url: string,
        height: number,
        width: number
      }[],
      uri: string
    },
    artists:
      {
        id: string,
        name: string,
        uri: string,
      }[],
    explicit: boolean,
    href: string,
    id: string,
    name: string,
    popularity: number,
    preview_url: string,
    uri: string
  }
  