"use strict";
const userName = document.getElementById("name");
const userEmail = document.getElementById("email");
const userRole = document.getElementById("role");
const userExist = document.getElementById("user-exist");
const userList = document.getElementById("list-of-users");
const searchInput = document.querySelector('input[type="text"]');
const findButton = document.getElementById("find");
let users = [];
let userCount = 1;
class UserManager {
    static listUser() {
        userList.innerHTML = '';
        users.forEach(user => {
            const child = document.createElement("div");
            child.classList.add("child");
            const list = document.createElement("div");
            list.classList.add("user-detail");
            list.innerHTML = `<div>${user.id}. ${user.name}</div>
            <div>${user.email}</div>
            <div>${user.role}</div>`;
            child.appendChild(list);
            const modify = document.createElement("div");
            modify.classList.add("modify");
            const userEdit = document.createElement("button");
            userEdit.textContent = "Edit";
            userEdit.onclick = () => UserManager.editUserRole(user.id);
            const userDelete = document.createElement("button");
            userDelete.textContent = "Delete";
            userDelete.onclick = () => UserManager.deleteUser(user.id);
            modify.appendChild(userEdit);
            modify.appendChild(userDelete);
            child.appendChild(modify);
            userList.appendChild(child);
        });
    }
    static addUser() {
        if (users.length == 0) {
            let user = {
                id: userCount++,
                name: userName.value,
                email: userEmail.value,
                role: userRole.value
            };
            users.push(user);
        }
        else {
            let user = {
                id: userCount++,
                name: userName.value,
                email: userEmail.value,
                role: userRole.value
            };
            if (users.find(mem => mem.email === user.email)) {
                userExist.textContent = "User Already Exists";
                userExist.style.display = 'block';
                userCount--;
                return;
            }
            else {
                userExist.textContent = '';
                userExist.style.display = 'none';
                users.push(user);
            }
        }
        this.listUser();
    }
    static editUserRole(userId) {
        var _a;
        const roles = ["admin", "user"];
        let newRole = (_a = window.prompt("Enter the new Role:  ")) === null || _a === void 0 ? void 0 : _a.trim().toLowerCase();
        if (!newRole || !roles.includes(newRole)) {
            userExist.textContent = "Invalid role enter the following Admin or User";
            return;
        }
        const updateUser = users.find(u => u.id == userId);
        if (updateUser) {
            updateUser.role = newRole.charAt(0).toUpperCase() + newRole.slice(1).toLowerCase();
            UserManager.listUser();
        }
        else {
            userExist.textContent = "User Not Found";
        }
    }
    static deleteUser(userId) {
        users = users.filter(user => user.id != userId);
        users = users.map((user, index) => (Object.assign(Object.assign({}, user), { id: index + 1 })));
        userCount--;
        UserManager.listUser();
        if (users.length == 0) {
            userCount = 1;
        }
    }
    static findUserByProperty(key, value) {
        return users.find(user => user[key] === value);
    }
}
findButton.addEventListener("click", function () {
    const searchValue = searchInput.value.trim();
    if (searchValue === "") {
        userExist.textContent = "Please enter a value to search.";
        userExist.style.display = 'block';
        return;
    }
    let user;
    if (!isNaN(Number(searchValue))) {
        const id = Number(searchValue);
        user = UserManager.findUserByProperty('id', id);
    }
    else {
        user = UserManager.findUserByProperty('email', searchValue);
    }
    if (user) {
        const child = document.createElement("div");
        child.classList.add("child");
        const list = document.createElement("div");
        list.classList.add("user-detail");
        list.innerHTML = `<div>${user.id}. Name: ${user.name}  Email: ${user.email} Role: ${user.role}</div>`;
        child.appendChild(list);
        window.alert(child.textContent);
    }
    else {
        userExist.textContent = "User Not Found";
        userExist.style.display = 'block';
    }
});
const addUser = document.getElementById("add");
addUser.addEventListener("click", function () {
    if (userEmail.value === "" || userName.value === "") {
        userExist.textContent = "Enter the credentials";
        return;
    }
    UserManager.addUser();
});
//# sourceMappingURL=index.js.map