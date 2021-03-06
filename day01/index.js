let app = new Vue({
    el:'#app',
    data:{
        message:'Hello Vue'
    }
});

app.message = 'I hava changed the data!'

var app2 = new Vue({
    el:'#app-2',
    data:{
        message:'页面加载于'+new Date().toLocaleString()
    }
});

var app3 = new Vue({
    el:'#app-3',
    data:{
        seen:true
    }
});

var app4 =  new Vue({
    el:'#app-4',
    data:{
        todos:[
        {text:'学习'},
        {text:'eat'},
        {text:'play'}
    ]}
});

var app5 = new Vue({
    el:"#app-5",
    data:{
        message:"HelloVue"
    },
    methods:{
        reverseMessage:function(){
            this.message = this.message.split('').reverse().join('')
        }
    }
});

var app6 = new Vue({
    el:'#app-6',
    data:{
        message:"Hello Vue!"
    }
});

Vue.component('todo-item',{
    props: ['todo'],
    template:'<li>{{todo.text}}</li>'
});

var app7 = new Vue({
    el:"#app-7",
    data:{
        vegetables:[
            {id:0,text:'白菜'},
            {id:1,text:'苦瓜'},
            {id:2,text:'黄瓜'}
        ]
    }
});

var app8 = new Vue({
    el:'#app-8',
    data:{
        movies:[]
    },
    methods: {
        getMovies : function getFilm(){
            this.$http.post('http://127.0.0.1:8081/niuren/findMovies',{
                "cno": "3",
                "movieName": "",
                "pageSize": 3
              }).then(function(res){
                //document.write(res.body);    
                this.movies = res.body.data
                console.log(res.body.data);
            },function(res){
                console.log(res.status);
            });
        }
    }
        
})