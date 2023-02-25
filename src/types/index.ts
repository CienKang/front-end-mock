export interface SongData {
    id: string,
    name: string,
    genre: {
        id: string,
        name: string
    },
    artist: {
        id: string,
        name: string
    },
    imageUrl: string,
    publishedAt: string
}

export interface CardsDataProps {
    allSongs: SongData[],
    setAllSongs: React.Dispatch<React.SetStateAction<SongData[]>>

}

export interface GenreProp {
    genres: string[]
}

export interface CardDataProp {
    song: SongData,
}

export interface GridSelectorProps {
    isGrid: boolean,
    setIsGrid: React.Dispatch<React.SetStateAction<boolean>>
}

export interface GenreNameProps {
    genre: string
}

export interface GenreSongs {
    [genre: string]: SongData[]
}

export interface GenreImagesInterface {
    [genre: string]: string
}