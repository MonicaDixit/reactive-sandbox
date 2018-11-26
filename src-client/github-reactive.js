import Rx, { Observable } from "rxjs/Rx";
import $ from "jquery";

// function getGithubUsers() {
//   return $.ajax({
//     url: 'https://api.github.com/users',
//     dataType: 'jsonp'
//   }).promise();
// }

const $results = $("#results");

var userDetails = {};
var userDetailsArr  = [];

function getGithubUsers() {
  return Observable.ajax(`https://api.github.com/users`);
}

getGithubUsers()
.map( resp => resp.response)
.mergeMap(list => Observable.from(list))
.map(item =>  item.login);
// .mergeMap(login => getGithubUserRepos(login))
// .mergeMap(resp => Observable.from(resp.response))
// .map(repoList => repoList.name)
// .subscribe(resp => console.log(`resp ${resp}`));
//  .subscribe(user => console.log(user))


// function getGithubUserRepos(user) {
//   return $.ajax({
//     url: `https://api.github.com/users/${user}/repos`,
//     dataType: 'jsonp'
//   }).promise();
// }

function getGithubUserRepos(user) {
  return Observable.ajax(`https://api.github.com/users/${user}/repos`);
}

// getGithubUserRepos('monicadixit')
// .mergeMap(resp => Observable.from(resp.response))
// .map(repoList => repoList.name)
// .subscribe(resp => console.log(`resp ${resp}`));




// getGithubUsers().
// mergeMap(userList => Observable.from(userList))
// .mergeMap(user => getGithubUserRepos(user.login))
// .mergeMap(resp => Observable.from(resp.response))
// .map(repoList => repoList.name)
// .subscribe(resp => console.log(`resp ${resp}`));


// let users$ = Observable.fromPromise(getGithubUsers());


// users$.subscribe(user => renderUsers(user.data));


// let repos = Observable.fromPromise(getGithubUserRepos('monicadixit'));

// repos.subscribe(repos => console.log(repos));
// Rx.Observable.ajax(
//     `https://jsonplaceholder.typicode.com/albums`)
//   .subscribe({
//     next: item => renderUsers(item.response),
//     error: error => console.log(error),
//     complete: function() {
//       console.log('completed');
//     }
//   });


//combine the requests to get the repos for all users



  function renderUsers(users) {
    let listItems =  users.map( item => `<li>${item.login}</li>`);
    const listArea = $('#results');
    listArea.append(listItems);
  }

  function getAllUsers(){
    return Observable.ajax('https://jsonplaceholder.typicode.com/users');
  };

  function getAllAlbumsForUser(item){
    return Observable.ajax(`https://jsonplaceholder.typicode.com/albums/${item.id}`);
  }


  //combine requests


// getAllUsers()
// .map(users => users.response)
// .mergeMap(userList => Observable.from(userList)
// .map(user => {user.name, user.id})
// .subscribe(item => console.log(item));

getAllUsers()
.map(users => users.response)
.mergeMap(userList => Rx.Observable.from(userList))
.map(item => buildUserObj(item))
.do(item => startBuildUser(item))
.mergeMap(item =>  Observable.from(getAllAlbumsForUser(item)))
.map(resp => resp.response)
.subscribe(createSubcriber());

function createSubcriber() {
	return {
		next: item => buildUser(item),
		error: error => console.log(error.stack || error),
		complete: function() {
			$results.append(renderUserAlbums(userDetailsArr));
		}
	};
}

function startBuildUser(item) {
  userDetailsArr[item.id] = item;
}

function buildUser(item) {
  Object.assign(userDetailsArr[item.id], item);
}



function buildUserObj(user){
  return {
    id: user.id,
    name: user.name
  }
}


function renderUserAlbums(dataArr) {
      return dataArr.map(item  => $('<li />').text(`${item.id}  ${item.title}`))
      // domElement.append($('<li />').text(`${albumData.id}  ${albumData.title}`));
}
