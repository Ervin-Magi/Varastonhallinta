const bcrypt = require('bcrypt')
const User = require('../models/user')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const mongoose = require('mongoose')

const helper = require('./test_helper')



describe('when there is atleast one user in database', () => {
    beforeEach(async () => {
        await User.deleteMany({})

        const passwordHash = await bcrypt.hash('salainen', 10)
        const user = new User({ username: 'admin', passwordHash, firstname: 'aatu', lastname: 'administraattori'})

        await user.save()
    })
    afterAll(() => {
        mongoose.connection.close()     
    })

    test('creating new user succeeds', async () => {
        const usersAtStart = await helper.usersInDb()

        const newUser = {
            username: 'kayttaja',
            password: 'kayttaja',
            firstname: 'Kayttaja',
            lastname: 'Kayttajanen'
        }

        await api
            .post('/api/users')
            .send(newUser)
            .expect(200)
            .expect('Content-Type', /application\/json/)

        const usersAtEnd = await helper.usersInDb()
        expect(usersAtEnd).toHaveLength(usersAtStart.length +1)

        const usernames = usersAtEnd.map(u => u.username)
        expect(usernames).toContain(newUser.username)
    })
    test('cannot create user with username that is already taken', async () => {

        const usersAtStart = await helper.usersInDb()

        const newUser = {
            username: 'admin',
            password: 'jotainjotain',
            firstname: 'something',
            lastname: 'something'
        }

        const result = await api
            .post('/api/users')
            .send(newUser)
            .expect(400)
            .expect('Content-Type', /application\/json/)

        expect(result.body.message).toContain('`username` to be unique. Value: `admin`')

        const usersAtEnd = await helper.usersInDb()

        expect(usersAtEnd).toHaveLength(usersAtStart.length)
    })
})