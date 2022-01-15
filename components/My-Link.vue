<template>
  <div class="My-Link">
    <div class="div-Icon">
      <a
        v-for="index in Link"
        :key="index.icon"
        :href="index.link"
        class="Icon-style"
      >
        <b-icon :icon="index.icon"></b-icon>
      </a>
    </div>

    <div class="foot">
      <p>
        &copy;2019-{{ new Date().getFullYear() }}<span>|</span
        ><a class="HYlink" href="https://108878.xyz">幻影官网</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Link链接
      Link: [
        {
          link: 'https://github.com/shouzia',
          icon: 'github',
        },
        {
          link: 'https://blog.shouzi.xyz/',
          icon: 'pencil',
        },
        {
          link: 'https://music.163.com/#/user/home?id=356752802',
          icon: 'music-note-beamed',
        },
        {
          link: 'mailto:saopipizhu@163.com',
          icon: 'mailbox',
        },
      ],
    }
  },
}
</script>

<style>
.My-Link {
  color: white;
  text-align: center;
}
a {
  font-size: 2.1429rem;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.6);
}
a:hover {
  text-decoration: none;
  color: #5cbbf6;
}
.HYlink {
  font-size: 1.2286rem;
  text-decoration: none;
}
.HYlink:hover {
  color: #5cbbf6;
}
.Icon-style {
  font-size: 20px;
  margin: 0 15px;
}
.div-Icon {
  margin: 30px 0;
}
.foot {
  font-size: 1.2286rem;
}
span {
  margin: 0px 20px;
}
@media screen and (max-width: 800px) {
  .foot {
    font-size: 1.1286rem;
  }
  .HYlink {
    font-size: 1.1286rem;
    text-decoration: none;
  }
  .Icon-style {
    margin: 0 15px;
    font-size: 20px;
  }
}
</style>