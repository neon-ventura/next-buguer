import mysql2 from 'mysql2/promise'

const db = mysql2.createPool({
    host: 'junction.proxy.rlwy.net',
    user: 'root',
    password: 'tAHXNVZPJWhkwNKcFwaFfdVfcirGKPOd',
    database: 'railway',
    port: 30483
})

export default db