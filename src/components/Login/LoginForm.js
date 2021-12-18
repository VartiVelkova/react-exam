const LoginForm = () => {
    return (
        <>
        <div className="container-fluid">
                    <form id="login-form" method="post">
                        <div className="row">
                          <div className="col-md-12">
                            <h2>Login</h2>
                          </div>
                          <div className="col-md-6">
                            <fieldset>
                              <input name="email" type="text" className="form-control" placeholder="email..."  />
                            </fieldset>
                          </div>
                          <div className="col-md-6">
                            <fieldset>
                              <input name="password" type="text" className="form-control" placeholder="password..." />
                            </fieldset>
                          </div>                          
                          <div className="col-md-12">
                            <fieldset>
                              <button type="submit" id="form-submit" className="button">Send Now</button>
                            </fieldset>
                            </div>
                        </div>
                    </form>
                </div>
            
        
        </>
    );
};

export default LoginForm;