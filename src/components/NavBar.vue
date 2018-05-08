<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-secondary">
      <router-link class="navbar-brand" to="/contacts">My contacts</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-item nav-link active" to="/contacts">Contacts</router-link>
          <router-link class="nav-item nav-link" to="/add-contact">Add Contact</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {

}
</script>