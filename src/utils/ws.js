class Socket {
  constructor(baseURL) {
    this.baseURL = baseURL
  }

  connect(url) {
    const ws = new WebSocket(`${this.baseURL}/${url}`)
    return ws
  }
}

export const socket = new Socket('ws://192.168.1.69:9009');
