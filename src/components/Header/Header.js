const Header = () => {
    return (
<header>
   
   <h1><a className="home" href="#">GoFishing</a></h1>
   <nav>
       <a href="#">Everything about fishing</a>
       
       <div id="user">
           <a href="/create">Create</a>
           <a href="/logout">Logout</a>
       </div>
       
       <div id="guest">
           <a href="/login">Login</a>
           <a href="/register">Register</a>
       </div>
   </nav>
</header>
    );
};

export default Header;