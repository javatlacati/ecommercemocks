import {http, HttpResponse} from 'msw'
import {createServer} from '@mswjs/http-middleware'

export const httpServer = createServer(
    http.get('/api/user', () => {
        return HttpResponse.json({firstName: 'John'})
    }),
    http.options('/api/products', () => {
        return new Response(null, {
            status: 200,
            headers: {
                Allow: 'GET,HEAD,POST',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization'
            },
        })
    }),
    http.get('/api/products', () => {
        return new Response(null, {
            status: 200,
            headers: {
                Allow: 'GET,HEAD,POST',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                'Content-Type': 'application/json',
            },
            body:[{
                id: 1,
                name: 'Gorra café',
                price: 10.99,
                image: 'FOTOSURBAN-28.JPG',
                description: 'Description 1',
            },
                {
                    id: 2,
                    name: 'Gorra rosa',
                    price: 7.24,
                    image: 'FOTOSURBAN-29.JPG',
                    description: 'Description 2',
                },
                {
                    id: 3,
                    name: 'Gorra negra logo gris',
                    price: 7.24,
                    image: 'FOTOSURBAN-31.JPG',
                    description: 'Description 2',
                },
                {
                    id: 4,
                    name: 'Gorra negra logo rojo',
                    price: 7.24,
                    image: 'FOTOSURBAN-34.JPG',
                    description: 'Description 2',
                }]
        })
    })
)

httpServer.listen(9090)