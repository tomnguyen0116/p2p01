import DHT from '@hyperswarm/dht'

const node = new DHT()
const serverKey = '6efcc0a9ef77e284c825724af127fea9fcb5e63bc0653037dd4883eabdbe971f'
const remotePublicKey = Buffer.from(serverKey, 'hex')
const encryptedSocket = node.connect(remotePublicKey)

encryptedSocket.on('open', function () {
  console.log('Connected to server')
})

encryptedSocket.on('data', function (data) {
  console.log('Remote said:', data.toString())
})
