import server from "../../uilt/index";

export let login = (data)=>{
    return server.request({
      url : '/login',
      method : 'post',
      data
    })
}

export let sigin = (data)=>{
  return server.request({
    url: '/sigin',
    method: 'post',
    data
  })
}
