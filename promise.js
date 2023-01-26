const posts = [
    {title:'post One',body:'this is post one',createdAt:new Date().getTime()},
    {title:'post two',body:'this is post two',createdAt:new Date().getTime()}
    
];
let intervalid=0;
function getPosts(){
    setTimeout(() =>{
        let output = '';
        for(let i=0;i<posts.length;i++){
            output += posts[i].title+(new Date().getTime()-posts[i].createdAt)/1000;
        }
        console.log(output);
    },1000);
}
function createPost(post){
    let promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push({...post,createdAt: new Date().getTime()});
            const error=false;
            if (!error) {
                resolve();
            } else {
                reject('Error: somthing went wrong')
            }
        },1000);
    });
    
}
const user={}
function updatrLastActivityTime(){
    let promise1 =  Promise((resolve,reject)=>{
        let a=new Date().getTime-posts.createdAt;
        console.log(a);
    })
}
function deletePOst(){
for(let j=0;j<posts.length;j++){
    setTimeout(()=>{
    posts.pop();
    //console.log(output);
 },1000);
}
}
const newfunction =()=>{
    getPosts();
    deletePOst();
    
}
createPost({title:'post three',body:'this is post three'});
createPost({title:'post four',body:'this is post four'});
Promise.all([promise,promise1]).then((values)=>{console.log(values)});