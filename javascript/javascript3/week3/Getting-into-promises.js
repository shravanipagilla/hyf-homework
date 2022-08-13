// @ts-nocheck
const url = "https://api.github.com/search/repositories?q=user:";
const url1=`${url}shravanipagilla`;
const url2=`${url}seona`;
const url3= `${url}lokesh-sw`;
const repoDetailsUl = document.getElementById('repoDetailsUl');
const promise1=fetch(url1);
const promise2=fetch(url2);
const promise3=fetch(url3);
const promise=[promise1,promise2,promise3]; 

function renderRepos(repoItems) {
    //console.log('creating li');
    const repoDetailsli = document.createElement('li');
    repoDetailsli.innerHTML = `<h2> ${repoItems[0].owner.login.toUpperCase()}'s Repositories </h2>`;
    repoDetailsUl.appendChild(repoDetailsli);
    for (const item of repoItems) {
      //  console.log(item);
        const repoItemsUl = document.createElement('ul');
        const repoItemsli = document.createElement('li');
        repoItemsli.innerHTML = `<h4>Full_Name: ${item.full_name}</h4> URL: ${item.url} <br><br> Owner: ${item.owner.id}`
        repoItemsUl.appendChild(repoItemsli);
        repoDetailsli.appendChild(repoItemsUl);
    }
}
//const promiseAll=[];
async function getRepoItems(){
await Promise.all(promise).then(res => {
    for(const data of res) {
        data.json()
            .then(jsonData => {
                renderRepos(jsonData.items);
            })
        }
    });
}
   
getRepoItems();


/*function getUser(user) {
    const api=`https://api.github.com/search/repositories?q=user:${user}`;
  fetch(api)
  .then(res=>res.json())
  .then(data=>
      {
          console.log(data);
          //const divEl=document.getElementById("getdata");
          //divEl.innerHTML=`User: ${data.username}`;
      });
      
  }

  getUser(shravanipagilla);*/