<template>
  <form class="box">
    <div class="field">
      <label class="label">Title</label>
      <div class="control">
        <input
          class="input is-medium"
          name="title"
          type="text"
          placeholder="Product Title"
          required
          v-model="title"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Description</label>
      <div class="control">
        <input
          class="input is-medium"
          name="title"
          type="text"
          placeholder="Product Description"
          required
          v-model="description"
        />
      </div>
      <div class="field">
        <label class="label mt-5">Image</label>
        <div class="file is-right is-warning is-medium mt-5">
          <label class="file-label">
            <input class="file-input" type="file" name="resume" />
            <span class="file-cta">
              <span class="file-icon">
                <i class="fas fa-upload"></i>
              </span>
              <span class="file-label"> Right file… </span>
            </span>
            <span class="file-name">
              Screen Shot 2017-07-29 at 15.54.25.png
            </span>
          </label>
        </div>
      </div>
    </div>
    <div class="field">
      <label class="label">Price</label>
      <div class="control">
        <input
          class="input is-medium"
          name="price"
          type="number"
          required
          v-model="description"
        />
      </div>
    </div>
  </form>
</template>