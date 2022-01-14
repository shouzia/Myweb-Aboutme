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
  font-size: 30px;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.6);
}
a:hover {
  text-decoration: none;
  color: #5cbbf6;
}
.HYlink {
  font-size: 1.4286rem;
  text-decoration: none;
}
.HYlink:hover {
  color: #5cbbf6;
}
.Icon-style {
  margin: 0 15px;
}
.div-Icon {
  margin: 30px 0;
}
.foot {
  font-size: 1.4286rem;
}
span {
  margin: 0px 20px;
}
</style>