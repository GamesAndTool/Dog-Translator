addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  // 目标URL
  const url = new URL(request.url)
  const targetUrl = 'https://jointoucan.com' + url.pathname + url.search

  // 创建新的请求
  let modifiedRequest = new Request(targetUrl, {
    method: request.method,
    headers: request.headers,
    body: request.body
  })

  // 获取响应
  let response = await fetch(modifiedRequest)

  // 创建新的响应头，移除限制iframe的头部
  let newHeaders = new Headers(response.headers)
  newHeaders.delete('x-frame-options')
  newHeaders.delete('content-security-policy')
  
  // 添加CORS头
  newHeaders.set('Access-Control-Allow-Origin', '*')
  newHeaders.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  newHeaders.set('Access-Control-Allow-Headers', '*')

  // 返回修改后的响应
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: newHeaders
  })
} 