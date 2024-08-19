function showLogin() {
    document.getElementById('content').innerHTML = `
        <h2>Login</h2>
        <form>
            <label for="username">Username:</label>
            <input type="text" id="username" name="username"><br><br>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password"><br><br>
            <input type="submit" value="Login">
        </form>
    `;
}

function showSignup() {
    document.getElementById('content').innerHTML = `
        <h2>Signup</h2>
        <form>
            <label for="newusername">Username:</label>
            <input type="text" id="newusername" name="newusername"><br><br>
            <label for="newpassword">Password:</label>
            <input type="password" id="newpassword" name="newpassword"><br><br>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email"><br><br>
            <input type="submit" value="Signup">
        </form>
    `;
}

function showAbout() {
    document.getElementById('content').innerHTML = `
        <h2>About Us</h2>
        <p>EduOrg is dedicated to providing accessible education to all. We offer a variety of online courses to help you learn and grow.</p>
    `;
}
