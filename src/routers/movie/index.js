export default {
    path:'/movie',
    component : () => import('@/views/movie'),
    children:[
        {
            // 这里填写相对路径
            path:'city',
            component:() =>  import('@/components/city')
        },
        {
            path:'comingsoon',
            component:() =>  import('@/components/comingsoon')
        },
        {
            path:'newplaying',
            component:() =>  import('@/components/newplaying')
        },
        {
            path:'search',
            component:() =>  import('@/components/search')
        },
        {
            path:'/movie',
            redirect:'/movie/newplaying'
        }
       
    ]
}