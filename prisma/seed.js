const prisma = require('./prismaClient')

async function createData() {
    const songs = [
        {
            author: 'The Kingston Trio',
            title: 'Tom Dooley',
            genre: 'Folk',
            year: '1958',
        },
        {
            author: 'The Kingston Trio',
            title: 'JazzSong',
            genre: 'Jazz',
            year: '1960',
        },
        {
            author: 'Led Zeppelin',
            title: 'Kashmir',
            genre: 'Rock',
            year: '1975',
        },
        {
            author: 'Miles Davis',
            title: 'Blue In Green',
            genre: 'Jazz',
            year: '1959',
        },
        {
            author: 'Muddy Waters',
            title: 'Mannish Boy',
            genre: 'Blues',
            year: '1955',
        },
    ]

    await prisma.song.createMany({
        data: songs
    })
}

createData();