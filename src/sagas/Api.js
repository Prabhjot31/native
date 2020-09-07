



const urlFriendsList = 'https://randomuser.me/api/?page=1&results=5&inc=id,name';
  
function* getFriendsList()
{
    const response = yield fetch(urlFriendsList, {
        method
    })
}