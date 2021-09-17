export class Book {
    id: string;
    volumeInfo: VolumeInfo
}

export class VolumeInfo {
    imageLinks: ImageLinks;
    publishedDate: string;
    title: string;
    previewLink: string;
    subtitle: string;
    publisher:string;
    authors:string
    categories:string
}

export class ImageLinks {
    smallThumbnail: string;
    thumbnail: string;
}