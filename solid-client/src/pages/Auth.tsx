import { Component } from 'solid-js'

const Auth: Component = () => {
  return (
    <div class='container-fluid p-3'>
      <form class='d-flex flex-column w-50 m-auto'>
        <div class='row mb-3'>
          <label for='inputUsername' class='col-sm-2 col-form-label'>
            Username
          </label>
          <div class='col-sm-10'>
            <input
              type='text'
              class='form-control'
              id='inputUsername'
              v-model='form.username'
            />
          </div>
        </div>
        <div class='row mb-3'>
          <label for='inputPassword' class='col-sm-2 col-form-label'>
            Password
          </label>
          <div class='col-sm-10'>
            <input
              type='password'
              class='form-control'
              id='inputPassword'
              v-model='form.password'
            />
          </div>
        </div>
        <button type='submit' class='btn btn-primary'>
          Sign in
        </button>
      </form>
      <p id='error'>Username or Password is incorrect</p>
    </div>
  )
}

export default Auth
