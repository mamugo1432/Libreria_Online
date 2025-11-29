import '../styles/Login.css'

export default function Login(){
    return `
    
    <section id="form" class="vh-100">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card shadow-2-strong">
          <div class="card-body p-5 text-center">

            <h3 class="mb-5">Login</h3>

            <div  class="form-outline mb-4">
            <label class="form-label" for="username">Username</label>
            <input type="text" id="username" class="form-control form-control-lg" />
            <small></small>
            </div>

            <div  class="form-outline mb-4">
            <label class="form-label" for="password">Password</label>
            <input type="password" id="password" class="form-control form-control-lg" />
            <small></small>
            </div>

            <button class="btn btn-primary btn-lg btn-block">
            <a href="/#/" style="color: inherit; text-decoration: none;">Send</a>
            </button>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    `
}
