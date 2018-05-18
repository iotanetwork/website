// Any Config to be used throughout the project is written here

module.exports = {
  'development': {
    'username': process.env.DB_USER || 'postgres',
    'password': process.env.DB_PASSWORD || 'ani',
    'database': process.env.DB_NAME || 'ien',
    'host': process.env.DB_HOST || '127.0.0.1',
    'port': process.env.DB_PORT || '5432',
    'dialect': 'postgres'
  },
  'test': {
    'username': 'update me',
    'password': 'update me',
    'database': 'update_me',
    'host': 'update me',
    'dialect': 'postgres'
  },
  'production': {
    'username': 'update me',
    'password': 'update me',
    'database': 'update me',
    'host': 'update me',
    'dialect': 'postgres'
  }
}
