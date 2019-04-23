module.exports.hello = async (event) => {
  if (event.source === 'serverless-plugin-warmup') {
    console.log('WarmUp - Lambda is warm!')
    return 'Warm Hello World!'
  }

  return {
    statusCode: 200,
    body: `Frozen Hello World!`
  }
}
