/*
*/

'use strict'

const rp = require('request-promise')
const assert = require('chai').assert

const IRedMail = require('../bin/iredmail')

const util = require('util')
util.inspect.defaultOptions = { depth: 1 }

const LOCALHOST = 'http://localhost:5000'

describe('#iRedMail', () => {
  let testType = 'unit'

  before(async () => {
    // Detect integration test flag.
    if (process.env.TEST_ENV === 'integration') {
      testType = 'integration'

      // iRedMail = new IRedMail()
      // await iRedMail.sequelize.authenticate()
    }
  })

  describe('#createUser', () => {
    if (process.env.TEST_ENV === 'integration') {
      it('should get database models', async () => {
        try {
          // console.log(`Hello world!`)

          const options = {
            method: 'POST',
            uri: `${LOCALHOST}/iredmail/adduser`,
            resolveWithFullResponse: true,
            json: true,
            body: {
            }
          }

          let result = await rp(options)
          console.log(`result: ${util.inspect(result.body)}`)
        } catch (err) {
          console.log(`Error in #createUser test: `, err)
        }
      })
    }
  })

  describe('#getUsers', () => {
    if (process.env.TEST_ENV === 'integration') {
      it('should get usernames of all users in mailbox table', async () => {
        try {
          // console.log(`Hello world!`)

          const options = {
            method: 'GET',
            uri: `${LOCALHOST}/iredmail`,
            resolveWithFullResponse: true,
            json: true
          }

          let result = await rp(options)
          // console.log(`result: ${util.inspect(result.body)}`)

          // Returns an array of username/email strings.
          assert.isArray(result.body)
          assert.isString(result.body[0])
        } catch (err) {
          console.log(`Error in #createUser test: `, err)
        }
      })
    }
  })
})
