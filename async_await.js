console.log('person 1: shows ticket');
console.log('person 2: shows ticket');
const beforeMovie = async () => {
    const promiseWifeBringingTickets = new Promise((resolve,reject)=>{
        setTimeout(()=> resolve('ticket'),3000);   
    });
    const getPopcorn = new Promise((resolve,reject)=> resolve(`popcorn`));
    const addbutter = new Promise((resolve,reject)=> resolve(`butter`));
    const getColdDrinks = new Promise((resolve,reject)=> resolve(`cold drinks`));
    let ticket = await promiseWifeBringingTickets;
    console.log(`wife: i have the ${ticket}`);
    console.log('husband: we should go in');
    console.log('wife: no i am hungry');
    let popcorn =await getPopcorn;
    console.log(`husband: i got some ${popcorn}`);
    console.log('husband: we should go in');
    console.log('wife: i need butter on my popcorn');
    let butter = await addbutter;
    console.log(`husband:i got some ${butter} on popcorn`);
    console.log('husband: anything else darling ?');
    console.log('wife: yes i want cold drinks');
    let coldDrink = await getColdDrinks;
    console.log(`husband: f**k you witch have your drinks anything else`);
    console.log('wife: f**k you i am hungry and lets go we are getting late');
    console.log('husband: thank you for the reminder *grins*');
    return ticket;
}
beforeMovie().then((m)=> console.log(`person 3: shows ${m}`));
