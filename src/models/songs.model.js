const prisma =  require('../../prisma/prismaClient');

async function getSongs(params) {
    const sanitizedParams = sanitizeParams(params);

    const skip = (sanitizedParams.page - 1) * sanitizedParams.perPage;

    const songs = await prisma.song.findMany({
        skip,
        take: Number(sanitizedParams.perPage),
        orderBy: sanitizedParams.orderBy,
        where: sanitizedParams.where,

    });

    const count = await prisma.song.count({
        where: sanitizedParams.where
    })

    return { songs, count };
}

function sanitizeParams(params) {
    console.log(params)
    const orderBy = {}
    orderBy[params.orderBy ?? 'id'] = params.orderSign  === 'desc' ? 'desc' : 'asc';
    
    const where = {}
    if (params.where && Object.keys(params.where).length > 0) {
        Object.keys(params.where).map(k => {
            where[k] = {
                equals: params.where[k]
            }
        })
    }

    return {
        page: params.page > 0 ? params.page : 1,
        perPage: params.perPage ?? 5,
        orderBy,
        where,
    }
}

async function getFilterData() {
    const data = {}

    data['authors'] = await prisma.song.findMany({
        distinct: ['author'],
        select: {
            author: true,
        }
    });

    data['genres'] = await prisma.song.findMany({
        distinct: ['genre'],
        select: {
            genre: true,
        }
    });

    data['years'] = await prisma.song.findMany({
        distinct: ['year'],
        select: {
            year: true,
        }
    });

    return data;
}

module.exports = {
    getSongs,
    getFilterData
}