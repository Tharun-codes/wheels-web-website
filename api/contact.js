const { Pool } = require('pg')

let pool

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed.' })
  }

  const body = req.body
  if (
    !body ||
    typeof body !== 'object' ||
    Array.isArray(body) ||
    typeof body.name !== 'string' ||
    typeof body.email !== 'string' ||
    typeof body.message !== 'string' ||
    (body.phone != null && typeof body.phone !== 'string')
  ) {
    return res.status(400).json({ error: 'Please provide valid contact details.' })
  }

  const name = body.name.trim()
  const email = body.email.trim()
  const phone = (body.phone || '').trim()
  const message = body.message.trim()

  if (
    !name ||
    !email ||
    !message ||
    name.length > 200 ||
    email.length > 320 ||
    phone.length > 40 ||
    message.length > 5000 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    return res.status(400).json({ error: 'Please check the contact details and try again.' })
  }

  if (!process.env.DATABASE_URL) {
    console.error('DATABASE_URL is not configured.')
    return res.status(500).json({ error: 'The service is not configured yet. Please try again later.' })
  }

  if (!pool) {
    pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      max: 1,
      connectionTimeoutMillis: 5000,
      idleTimeoutMillis: 10000
    })
  }

  try {
    await pool.query(
      'INSERT INTO contact_submissions (name, email, phone, message) VALUES ($1, $2, $3, $4)',
      [name, email, phone || null, message]
    )
    return res.status(201).json({ message: 'Your message was saved.' })
  } catch (error) {
    console.error('Failed to save contact submission:', error)
    return res.status(500).json({ error: 'Unable to save your message right now. Please try again later.' })
  }
}
